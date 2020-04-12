
const consign = require('consign');
const express = require('express');
const bodyParse = require('body-parser')
//const dotenv = require('dotenv-safe')
//const jwt=require()
module.exports = ()=>{
    const app = express();
    //app.use(dotenv.config());
    app.use(bodyParse.json({extended:true}))
    consign().include('controllers').into(app)
    
    return app
}
