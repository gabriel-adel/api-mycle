
const Sequelize = require('sequelize');
const db = require('../config/con')
const ProdutosParams = db.define('Produtos',{
    nomeProduto:{
        type:Sequelize.STRING
    },    
    cor:{
        type:Sequelize.STRING
    },      
    valorAtacad:{
        type: Sequelize.DECIMAL(5,2)
    },    
    valorVarejo:{
        type: Sequelize.DECIMAL(5,2)
    },    
    descProduto:{
        type:Sequelize.STRING
    }, 
    codigoProduto:{
        type:Sequelize.STRING
    },  
    dataProduto:{
        type:Sequelize.DATE
    },     
    tamanhoMinimo:{
        type:Sequelize.INTEGER
    },   
    tamanhoMaximo:{
        type:Sequelize.INTEGER
    },  
    tag:{
        type:Sequelize.STRING
    }
},{
    timestamps: false
})

class Produto { 
    
    showOneProduct(req,resp){
        ProdutosParams.findOne({
            where:req.params.id
        })
        .then(result => resp.status(201).json(result))
        .catch(err => resp.status(400).json(err))
    }
    showProduto(resp){ 
        ProdutosParams.findAll()
        .then(result => {resp.send(result)
        resp.end(result)})
        .catch(err =>resp.status(400).json(err)) 
    }
    showProductsLimit(req,resp){ 
        ProdutosParams.findAll({
            limit:req.params.limitProd,
            offset:req.params.limitOff
        })
        .then(result => 
            resp.status(201).json(result)
        )
        .catch(err =>
            resp.status(400).json(err)
        ) 
    } 
    
    addProduto(produtos,resp){
        db.sync({ force: false })
            .then(() =>
                ProdutosParams.create({
                nomeProduto:produtos.nomeProduto,    
                cor:produtos.cor,            
                valorAtacad:produtos.valorAtacad,    
                valorVarejo:produtos.valorVarejo,    
                descProduto:produtos.descProduto, 
                codigoProduto:produtos.codigoProduto,  
                dataProduto:new Date(),     
                tamanhoMinimo:produtos.tamanhoMinimo,   
                tamanhoMaximo:produtos.tamanhoMaximo,  
                tag:produtos.tag,
            }
            
        )).then(result =>{
            //console.log(result) 
            //resp.status(201).json('done')
            //resp.send('done')
            resp.status(201).json(result)
        })
        .catch(err =>
            //resp.status(400).json(err)
            console.log(err)
        ) 
        
        
    }
    
    removeProduto(produto,resp){ 
        //console.log(req.params.id)
        //const id = ;
         
        ProdutosParams.destroy({
            where:{
                id:produto.params.id
            }
        })
        .then(() => 
            console.log('done')
            //resp.status(201).json(result)
        )
        .catch(() =>
            console.log('done')
            //resp.status(400).json(err)
        ) 
        
    }

         
    editProduto(produtos,idProduto,resp){ 
        ProdutosParams.update(
            {
                nomeProduto:produtos.nomeProduto,    
                cor:produtos.cor,            
                valorAtacad:produtos.valorAtacad,    
                valorVarejo:produtos.valorVarejo,    
                descProduto:produtos.descProduto, 
                codigoProduto:produtos.codigoProduto,  
                dataProduto:new Date(),      
                tamanhoMinimo:produtos.tamanhoMinimo,   
                tamanhoMaximo:produtos.tamanhoMaximo,  
                tag:produtos.tag,
            },
            {
                where:{
                    id:idProduto,
            }
        })
        .then(() => 
            console.log('done')
            //resp.status(201).json(result)
        )
        .catch(() =>
            console.log('done')
            //resp.status(400).json(err)
        )  
    }
    
}
module.exports = new Produto;