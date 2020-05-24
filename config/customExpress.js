const consign = require('consign');
const express = require('express');
const bodyParse = require('body-parser');


 
class CustomExpress{
    app(){
        const app = express();
        app.use(bodyParse.json({extended:true}))
        app.use(function(req,res,next) {
            res.header("Access-Control-Allow-Origin", "*"); 
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
            res.header("Content-Type", "application/json");
            
            next();
        })
        consign().include('controllers').into(app)
        return app
    }

}
module.exports = new CustomExpress;