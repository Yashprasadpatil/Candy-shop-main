const Sequelize = require("sequelize");

const sequelize = new Sequelize("admin-seller-panel", "root", "yash@7890", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
