const customExpress = require('./config/customExpress');
const con = require('./config/con');
const crypto = require("crypto");

const app = customExpress.app()
	


con.authenticate().then((err)=>{
    if(err){ 
        console.log('acho que deu erro');
        
    }else{
        app.listen(4000,()=>{
            console.log('rodando');
            
        })
    
    }
})

