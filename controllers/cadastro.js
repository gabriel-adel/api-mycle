const cadastro = require('../models/cadastro')
const login = require('../models/login')
//const teste = require('../models/teste')
module.exports = app =>{
    app.post('/addCadastro',login.loginApi,(req,resp)=>{
        cadastro.addCadastro(req.body,resp);
        
    })
    app.get('/showOneCadastro/:id',login.loginApi,(req,resp)=>{
        cadastro.showOneCadastro(req.body,resp);
        
    })
    app.get('/showCadastro',login.loginApi,(req,resp,next)=>{
        cadastro.showCadastro(req.body,resp,next);
        
    })
    app.delete('/delCadastro/:id',login.loginApi,(req,resp)=>{
        cadastro.delCadastro(req.params,resp);
        
    })
    app.put('/editCadastro/:id',login.loginApi,(req,resp)=>{
        cadastro.editCadastro(req.params,resp);
        
    })
    app.post('/login',(req,resp)=>{
        cadastro.login(req.body,resp);
    })
    app.post('/logout',(req,resp)=>{
        cadastro.logout(req.body,resp);
    })

}