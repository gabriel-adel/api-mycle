const cadastro = require('../models/cadastro')
const login = require('../models/login')
//const teste = require('../models/teste')
module.exports = app =>{
    
    app.post('/addCadastro',login.loginApi,(req,resp)=>{
        cadastro.addCadastro(req.body,resp);
    })
    app.get('/showOneCadastro/:id',login.loginApiConta,(req,resp)=>{
        cadastro.showOneCadastro(req.params,resp);
    })
    app.get('/showCadastro',login.loginApiConta,(req,resp,next)=>{
        cadastro.showCadastro(req.body,resp,next);
    })
    app.delete('/delCadastro/:id',login.loginApiConta,(req,resp)=>{
        cadastro.delCadastro(req.params,resp);
    })
    app.put('/editCadastro/:id',login.loginApiConta,(req,resp)=>{
        cadastro.editCadastro(req.params,resp);
    })
}