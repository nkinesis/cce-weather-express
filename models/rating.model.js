module.exports = (sequelize, Sequelize) => {
    const Ratings = sequelize.define("ratings", {
        value: {
            type: Sequelize.INTEGER
        },
    }, { timestamps: true });

    return Ratings;
};