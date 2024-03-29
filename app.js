var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const Sequelize = require("./db.connection");
const setupData = require("./data/setupdata.js")

// import routers
var indexRouter = require('./routes/index');
var citiesRouter = require('./routes/cities');
var newslettersRouter = require('./routes/newsletters');
var weatherRecordsRouter = require('./routes/weatherRecords');
var ratingsRouter = require('./routes/ratings');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// use routers
app.use('/', indexRouter);
app.use('/cities', citiesRouter);
app.use('/newsletters', newslettersRouter);
app.use('/weatherRecords', weatherRecordsRouter);
app.use('/ratings', ratingsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/* Database creation */
const City = require("./models/city.model")(Sequelize.connection, Sequelize.library);

const WeatherRecord = require("./models/weatherRecord.model")(Sequelize.connection, Sequelize.library);
WeatherRecord.belongsTo(City);

Sequelize.connection.sync({ force: false, alter: true }).then(() => {
  return City.count()
}).then((count) => {
  // create cities in the database (if it's empty)
  if (count == 0) {
    City.bulkCreate([
      { name: "Montreal" },
      { name: "Toronto" },
      { name: "Ottawa" }
    ])
  }
}).then(() => {
  return WeatherRecord.count()
}).then((count) => {
  // create weather records in the database (if it's empty)
  if (count == 0) {
    WeatherRecord.bulkCreate(setupData)
  }
}).then(() => {
  const Rating = require("./models/rating.model")(Sequelize.connection, Sequelize.library);
  Rating.sync({ force: false, alter: true });

  const Newsletter = require("./models/newsletter.model")(Sequelize.connection, Sequelize.library);
  Newsletter.sync({ force: false, alter: true });
})

module.exports = app;
