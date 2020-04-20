const produto = require('../model/cadastro');

module.exports = app =>{
    
    app.get('/produto',(req,resp)=>{
        produto.showProduto(resp)  
        
    })
    app.post('/addProduto',(req,resp)=>{
        produto.addProduto(req.body,resp)  
        
    })
     
    app.delete('/delProduto/:id',(req,resp)=>{
        //console.log(req.params.id);
        produto.removeProduto(req,resp)  
        
    })
    
    app.put('/editProduto/:id',(req,resp)=>{
        produto.editProduto(req.body,req.params.id,resp)  
        
    })
    app.get('/showOneProduct/:id',(req,resp)=>{
        produto.showOneProduct(req,resp);
    })
    app.get('/showProductsLimit/:limit',(req,resp)=>{
        produto.showProductsLimit(req,resp);
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





    