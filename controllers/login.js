const cadastro = require('../models/cadastro')
const login = require('../models/login')
//const teste = require('../models/teste')

module.exports = app =>{    
    app.post('/login',(req,resp)=>{
        cadastro.login(req.body,resp);
    })
    app.post('/logout',(req,resp)=>{
        cadastro.logout(req.body,resp);
    })
    
}