const { Sequelize } = require("sequelize");

// const dbConfig = require("../config/db.config.js");

// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//   operatorsAliases: false,

//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle
//   }
// });
const sequelize = new Sequelize("sqlite::memory:");
const db = {};

db.sequelize = sequelize;

db.games = require("./game.model")(sequelize);

module.exports = db;
