const { Op } = require("sequelize");
const Sequelize = require("../db.connection");
const WeatherRecord = require("../models/weatherRecord.model")(Sequelize.connection, Sequelize.library);

exports.findAll = async (req, res) => {
    var condition = { id: { [Op.gt]: 0 } };
    var result = [];
    await WeatherRecord.findAll({ where: condition })
    .then(data => {
        result = data
    })
    .catch(data => {
        result = data
    })
    return result
};