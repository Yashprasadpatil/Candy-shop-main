const Sequelize = require("sequelize");

const sequelize = require("../util/database");
const User = sequelize.define("expense", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  amount: {
    type: Sequelize.STRING,
    unique: true,
  },
  quantity: {
    type: Sequelize.STRING,
  },
});
module.exports = User;
