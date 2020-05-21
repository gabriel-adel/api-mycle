const consign = require('consign');
const express = require('express');
const bodyParse = require('body-parser');


/* 
const DADOS_DESCRIPTOGRAFAR = { 
    algoritmo:"aes256",
    segredo:"",
    tipo:'hex'
}
*/ 
class CustomExpress{
    app(){
        const app = express();
        app.use(bodyParse.json({extended:true}))
        consign().include('controllers').into(app)
        return app
    }

}
module.exports = new CustomExpress;
