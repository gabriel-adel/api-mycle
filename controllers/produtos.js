const produto = require('../models/produto');
const login = require('../models/login')

module.exports = app =>{
    
    app.get('/produto',login.loginApi,(req,resp)=>{
        produto.showProduto(resp)  
        
    })
    app.post('/addProduto',login.loginApi,(req,resp)=>{
        produto.addProduto(req.body,resp)  
        
    })
     
    app.delete('/delProduto/:id',login.loginApi,(req,resp)=>{
        //console.log(req.params.id);
        produto.removeProduto(req,resp)  
        
    })
    
    app.put('/editProduto/:id',login.loginApi,(req,resp)=>{
        produto.editProduto(req.body,req.params.id,resp)  
        
    })
    app.get('/showOneProduct/:id',login.loginApi,(req,resp)=>{
        produto.showOneProduct(req,resp);
    })
    app.get('/showProductsLimit/:limitProd/:limitOff',login.loginApi,(req,resp)=>{
        produto.showProductsLimit(req,resp);
    })
    app.get('/teste',login.loginApi,(req,resp)=>{
        produto.showProductsLimit4(req,resp)
    })
    /*
    app.get('/shareProducts/:id',(req,resp)=>{
        produto.showOneProduct(req,resp);
    })
     
    app.post('/clienteCadastro',(req,resp)=>{
        const cadastroCliente = req.body;
        cadastro.recebeDados(cadastroCliente,resp);
    })
    */
    
}





    