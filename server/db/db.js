const Sequelize = require("sequelize");
require("dotenv").config();
<<<<<<< HEAD

const db = new Sequelize(process.env.DATABASE_URL || "postgres://localhost:5432/messenger", {
=======
const db = new Sequelize(process.env.DATABASE_URL , {
>>>>>>> origin/main
  logging: false
});
module.exports = db;
