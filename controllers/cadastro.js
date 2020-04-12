const cadastro = require('../model/cadastro');


module.exports = app =>{
    /* 
    function verifyJWT(req,res,next){
        var token = req.header['x-acess-token'];
        if(!token) return res.status(401).send({auto:false,message:"nao existe token"});
        jwt.verify(token,process.env)
    }
    */
    app.get('/produto',(req,resp)=>{
        con.conn('select * from produto',resp);
    })
    app.post('/clienteCadastro',(req,resp)=>{
        const cadastroCliente = req.body; 
        cadastro.adicionaCadastro(cadastroCliente);
        resp.send('acho que foi sim ');
    })
    
}





    