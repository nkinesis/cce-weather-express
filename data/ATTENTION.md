# Attention!
Do not write functions that read directly from the array in setupdata.js. This file is used only to set up the database when you start up your Express app for the first time. Please use Sequelize to read from the database: https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#simple-select-queries.