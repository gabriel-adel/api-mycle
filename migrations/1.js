'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Produtos',{
      id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey: true,
        autoIncrement: true,
      
      },nomeProduto:{
        type:DataTypes.STRING,
        allowNull:false,
      },    
      cor:{
        type:DataTypes.STRING,
        allowNull:false,
      },            
      valorAtacad:{
        type: DataTypes.DECIMAL(5,2),
        allowNull:false,
      },    
      valorVarejo:{
        type: DataTypes.DECIMAL(5,2),
        allowNull:false,
      },    
      descProduto:{
        type:DataTypes.STRING,
        allowNull:false,
      }, 
      codigoProduto:{
        type:DataTypes.STRING,
        allowNull:false,
      },  
      dataProduto:{
        type:DataTypes.DATE,
        allowNull:false,
      },     
      tamanhoMinimo:{
        type:DataTypes.INTEGER,
        allowNull:false,
      },   
      tamanhoMaximo:{
        type:DataTypes.INTEGER,
        allowNull:false,
      },  
      tag:{
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
    return queryInterface.dropTable('Produtos');
  }
};
