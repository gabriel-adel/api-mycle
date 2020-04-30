'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('DadosPessoais',{
      id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement: true,
      
      },cpf:{
        type:DataTypes.STRING
      },dataNascimento:{
        type:DataTypes.STRING
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
    return queryInterface.dropTable('DadosPessoais');
  }
};
