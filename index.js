const customExpress = require('./config/customExpress');

const app = customExpress()
const con = require('./infra/con');
console.log('conexao');
con.connect(error=>{
    if(error){
        console.log('error');
    }else{

    app.listen(3000,()=>{
        console.log('rodando');
    })

    }
})
