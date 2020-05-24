'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Pessoas',{
      id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement: true,
      },nome:{
        type:DataTypes.STRING
      },
      cpf:{
        type:DataTypes.STRING
      },dataNascimento:{
        type:DataTypes.STRING
      },
      id_login:{
        type:DataTypes.INTEGER,
        //allowNull:false,
        references:{
          model:'Usuarios',
          key:'id',
        },
        onDelete:'CASCADE',
      }, 
      
      /*
      ,createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      */
    })
  },

  down: (queryInterface, DataTypes) => {
    return queryInterface.dropTable('Pessoas');
  }
};
