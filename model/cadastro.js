/*const con = require('../infra/con');

class Cadastro{
    
 
    recebeDados(cadastro,resp){
        const login = cadastro.usuario 
        
        const loginValido = login.length >=6; 
        
        const senha = cadastro.senha
        const senhaValido = senha.length >=6;
        
        const cpf = cadastro.cpf 
        //regex
        //const cpfValido = login.length != 11;
        
        const dataNascimento = cadastro.dataNascimento
        
        
        const nome = cadastro.nome
        //const nomeValido = nome.length >=6; 
        
        const sexo = cadastro.sexo
        //const sexoValido = sexo.length !=0; 
        

        const email = cadastro.email 
        //regex
        
        const telefone = cadastro.telefone
        //regex
        
        const celular = cadastro.celular 
        //regex

        const estado = cadastro.estado
        //const estadoValido = estado.length != null; 
        
        const cidade = cadastro.cidade
        //const cidadeValidado = cidade.length != null; 

        const bairro = cadastro.bairro
        //const bairroValidado = bairro.length != null; 

        const rua = cadastro.rua
        //const ruaValidado = rua.length != null; 
        
        const numero = cadastro.numero
        //const numeroValidado = numero.length != 0; 
        
        const cep = cadastro.cep 
        //regex

        const complemento = cadastro.complemento
        //regex

        
        const validos  = [
            {
                nome:'login',
                valido:loginValido,
                error:"login invalido"
            },
            {
                nome:'senha',
                valido:senhaValido,
                error:"senha invalida"
            }
        ]
        const error = validos.filter(campo=>!campo.valido)
        const existError = error.length
        if(existError){
            resp.status(400).json(error)
        }else{
            this.cadastro = cadastro;
            
            this.login(cadastro,resp)
            
    //        this.dadosPessoais(cadastro,resp)
            
    //        this.pessoa(cadastro,resp)
    //        this.contato(cadastro,resp)
    //        this.endereco(cadastro,resp)
            
        }
            
    }
    
    login(resp){
        let usuario = this.cadastro.usuario;
        let senha = this.cadastro.senha;
        
        const sql = `insert into conta(usuario,senha) value('${usuario}','${senha}')`;
        con.query(sql,cadastro,(erro,result)=>{
            if(erro){
                resp.status(400).json(erro);
            }else{
                resp.status(201).json(result)
            }
        })
    }
    
    dadosPessoais(resp){
        let cpf = this.cadastro.cpf;
        let dataNascimento = this.cadastro.dataNascimento;
        
        const sql = `insert into dadosPessoais(cpf,dataNascimento) value('${cpf}','${dataNascimento}')`;
        con.query(sql,cadastro,(erro,result)=>{
            if(erro){
                resp.status(400).json(erro);
            }else{
                //resp.status(201).json(result);
                //console.log('hue');
            }
        })
    
    }

    pessoa(resp){
        let nome = this.cadastro.nome;
        let sexo = this.cadastro.sexo;
        
        const sql = `insert into pessoa(nome,sexo,id_login,id_dados_pessoais) value('${nome}','${sexo}',LAST_INSERT_ID(),LAST_INSERT_ID());`;
        //tirar data cadastro
        con.query(sql,cadastro,(erro,result)=>{
            if(erro){
                resp.status(400).json(erro);
            }else{
                //resp.status(201).json(result)
                //adicionaDadosPessoais(cadastro,resp.insertId);            
            }
        })
    
    }
    contato(resp){
        let email = this.cadastro.email;
        let telefone = this.cadastro.telefone;
        let celular = this.cadastro.celular;

        const sql = `insert into contato(email,telefone,celular,id_pessoa) value('${email}','${telefone}','${celular}',LAST_INSERT_ID());`;
        con.query(sql,cadastro,(erro,result)=>{
            if(erro){
                resp.status(400).json(erro);
            }else{
                //resp.status(201).json(result)
            }
        })
    }
    endereco(resp){
        w
        const sql = `insert into endereco(estado,cidade,bairro,rua,numero,cep,id_pessoa,complemento) value('${estado}','${cidade}','${bairro}','${rua}','${numero}','${cep}',LAST_INSERT_ID(),'${complemento}');`;
        con.query(sql,cadastro,(erro,result)=>{
            if(erro){
                resp.status(400).json(erro);
            }else{
                //resp.status(201).json(result)
            }
        })
    
    }
}
module.exports = new Cadastro;



*/
const Sequelize = require('sequelize');
const db = require('../infra/con')

class Produto { 
    produto(){
        const produto = db.define('produtos',{
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
    return produto;
    }
    showOneProduct(req,resp){
        this.produto().find({
            where:req.params.id
        })
        .then(result => resp.status.json(result))
        .catch(err =>resp.status(400).json(err))
    }
    showProduto(resp){ 
        this.produto().findAll()
        .then(result => resp.status(201).json(result))
        .catch(err =>resp.status(400).json(err)) 
    } 
    addProduto(produtos,resp){
        this.produto().create({
            nomeProduto:produtos.nomeProduto,    
            cor:produtos.cor,            
            valorAtacad:produtos.valorAtacad,    
            valorVarejo:produtos.valorVarejo,    
            descProduto:produtos.descProduto, 
            codigoProduto:produtos.codigoProduto,  
            dataProduto:produtos.dataProduto,     
            tamanhoMinimo:produtos.tamanhoMinimo,   
            tamanhoMaximo:produtos.tamanhoMaximo,  
            tag:produtos.tag,
        })
        .then(
            result =>
                console.log(result) 
                //resp.status(201).json('done')
                //resp.send('done')
        )
        .catch(err =>
            //resp.status(400).json(err)
            console.log(err)
        ) 
        
    }
    
    removeProduto(produto,resp){ 
        //console.log(req.params.id)
        //const id = ;
         
        this.produto().destroy({
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
        this.produto().update(
            {
                nomeProduto:produtos.nomeProduto,    
                cor:produtos.cor,            
                valorAtacad:produtos.valorAtacad,    
                valorVarejo:produtos.valorVarejo,    
                descProduto:produtos.descProduto, 
                codigoProduto:produtos.codigoProduto,  
                dataProduto:produtos.dataProduto,     
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