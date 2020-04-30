'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Usuarios',{
      id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement: true,
      
      },usuario:{
        type:DataTypes.STRING,
        allowNull:false,
      },
      senha:{
        type:DataTypes.STRING,
        allowNull:false,
      }/* 
      ,createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },*/
    })
  },

  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('Usuarios');
  }
};
