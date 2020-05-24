const Sequelize = require('sequelize');

const conn = new Sequelize('mycle','nodeuser','nodeuser@1234',{
    host:'192.168.15.39',
    dialect:'mysql',
})
module.exports = conn;










