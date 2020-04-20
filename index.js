const customExpress = require('./config/customExpress');

const app = customExpress.app()
const con = require('./infra/con');

con.authenticate().then((err)=>{
    if(err){ 
        console.log('acho que deu erro');
    }else{
        app.listen(3000,()=>{
            console.log('rodando');
        })
    
    }
})
