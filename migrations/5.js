'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Contatos',{
      id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement: true,
      
      },email:{
        type:DataTypes.STRING,
        allowNull:false,
      },
      telefone:{
        type:DataTypes.STRING,
        allowNull:false,
      },
      celular:{
        type:DataTypes.STRING,
        allowNull:false,
      },
      id_pessoa:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
          model:'Pessoas',
          key:'id',
        },
        onDelete:'CASCADE',
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
    return queryInterface.dropTable('Contatos');
  }
};
