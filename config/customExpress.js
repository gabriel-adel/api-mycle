const consign = require('consign');
const express = require('express');
const bodyParse = require('body-parser');


/* 
const DADOS_DESCRIPTOGRAFAR = { 
    algoritmo:"aes256",
    segredo:"+;p7mX@JHaCjL8F?SgwTW3!e6RLK.y{8nhg{4IA#jCNw!Sl^0|",
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