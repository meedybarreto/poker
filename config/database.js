const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('poker', 'poker', 'poker', {
  host: 'localhost', 
  dialect: 'postgres', 
});

module.exports = sequelize;
