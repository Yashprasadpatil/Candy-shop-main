// const Sequelize = require("sequelize");

// const sequelize = new Sequelize(
//   "admin-seller-panel",
//   "root",
//   "yash@7890", {
//   dialect: "mysql",
//   host: "localhost",
// });

// module.exports = sequelize;



const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_SCHEMA,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    host: "localhost",
    //host: process.env.DB_HOST,
  }
);

module.exports = sequelize;
