const Sequelize = require("sequelize");

const db = new Sequelize(process.env.DATABASE_URL || "postgres://postgres:compost@localhost:5432/messenger", {
  logging: false
});
const asyncWrapper = async()=>{
  
try {
  await db.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
}
asyncWrapper();
module.exports = db;
