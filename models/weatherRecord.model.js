module.exports = (sequelize, Sequelize) => {
    const WeatherRecords = sequelize.define("weatherRecords", {
        condition: {
            type: Sequelize.STRING
        },
        date: {
            type: Sequelize.DATE
        },
        maxTemp: {
            type: Sequelize.INTEGER
        },
        minTemp: {
            type: Sequelize.INTEGER
        },
        cityId: {
            type: Sequelize.INTEGER
        },
    }, { timestamps: true });

    return WeatherRecords;
};