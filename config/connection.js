const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

// JAWSDB is the hosted connection in Heroku

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost', // 127.0.0.1
      dialect: 'mysql',
      port: 3306 // this is the port for mysql
    }
  );
}

module.exports = sequelize;
