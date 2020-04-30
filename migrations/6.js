'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Enderecos',{
      id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement: true,
      
      },estado:{
        type:DataTypes.STRING
      },cidade:{
        type:DataTypes.STRING
      },bairro:{
        type:DataTypes.STRING
      },rua:{
        type:DataTypes.STRING
      },numero:{
        type:DataTypes.INTEGER
      },cep:{
        type:DataTypes.STRING
      },id_pessoa:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
          model:'Pessoas',
          key:'id',
        },
        onDelete:'CASCADE',
      },complemento:{
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
    return queryInterface.dropTable('Enderecos');
  }
};
