const Sequelize = require('sequelize');

const conn = new Sequelize('mycle','nodeuser','nodeuser@1234',{
    host:'localhost',
    dialect:'mysql',
})
module.exports = conn;










