module.exports = (sequelize, Sequelize) => {
    const City = sequelize.define("city", {
        name: {
            type: Sequelize.STRING
        }
    }, { timestamps: true });

    return City;
};