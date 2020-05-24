

const Sequelize = require('sequelize');
const db = require('../config/con');
const crypto = require('crypto');
var jwt = require('jsonwebtoken');
//const fs = require('fs')

var encPassword = (password)=>{
    const DADOS_DESCRIPTOGRAFAR = { 
        algoritmo:"aes256",
        segredo:"KztwN21YQEpIYUNqTDhGP1Nnd1RXMyFlNlJMSy55ezhuaGd7NElBI2pDTnchU2xeMHw=",
        tipo:'hex'
    }
    const cipher = crypto.createCipher(DADOS_DESCRIPTOGRAFAR.algoritmo, DADOS_DESCRIPTOGRAFAR.segredo);
    cipher.update(password);
    var hue =  cipher.final(DADOS_DESCRIPTOGRAFAR.tipo);
    return hue;    
}


const Conta = db.define('Usuarios',{
    usuario:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    senha:{
        type:Sequelize.STRING,
        allowNull:false, 
    },
    permissao:{
        type:Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:false
    },
    nivelAcess:{
        type:Sequelize.INTEGER,
        allowNull:false,
        defaultValue:false
    },
    
},{
    timestamps: false
})

const DadosPessoais = db.define('DadosPessoais',{
    cpf:{
        type:Sequelize.STRING,
        allowNull:false, 
    },dataNascimento:{
        type:Sequelize.STRING,
        allowNull:false, 
    },
},{
    timestamps: false
})

const Pessoa = db.define('Pessoas',{
    nome:{
        type:Sequelize.STRING,
        allowNull:false, 
    }
},{timestamps: false});

const Contato = db.define('Contatos',{
    email:{
        type:Sequelize.STRING,
        allowNull:false, 
    },
    telefone:{
        type:Sequelize.STRING,
        allowNull:false, 
    },
    celular:{
        type:Sequelize.STRING,
        allowNull:false, 
    },
    
},{
    timestamps: false
})

const Endereco = db.define('Enderecos',{
    estado:{
        type:Sequelize.STRING,
        allowNull:false, 
    },cidade:{
        type:Sequelize.STRING,
        allowNull:false, 
    },bairro:{
        type:Sequelize.STRING,
        allowNull:false, 
    },rua:{
        type:Sequelize.STRING,
        allowNull:false, 
    },numero:{
        type:Sequelize.INTEGER,
        allowNull:false, 
    },cep:{
        type:Sequelize.STRING,
        allowNull:false, 
    },complemento:{
        type:Sequelize.STRING,
        allowNull:true, 
    },
},{
    timestamps: false
})

Pessoa.hasOne(DadosPessoais,{
    onDelete: 'CASCADE',
});
Pessoa.hasOne(Conta,{
    onDelete: 'CASCADE',
});
Pessoa.hasOne(Endereco,{
    onDelete: 'CASCADE',
});
Pessoa.hasOne(Contato,{
    onDelete: 'CASCADE',
});

class Cadastro{
    login(dados,resp){
        Conta.findOne({
            where:{
                usuario:dados.usuario,
                senha:encPassword(dados.senha),
            }
        }).then((result) => {
            if(result != null){
                let idValue = dados.id
                /*
                let privateKey = fs.readFileSync('./private.key', 'utf8')
                let token = jwt.sign({ idValue, }, privateKey,{
                    expiresIn: 100,
                    algorithm:  "RS256"
                });
                */ 
                let token = jwt.sign({ idValue, }, 'aw3129ojk)(&@#awd)wd-23901 @$(Iolawd#&*$}^)^~#%%¨%',{
                    expiresIn: 2000
                    //expiresIn: 60
                });
                
                resp.status(200).json({ auth: true, token: token });

                
            }else{
                resp.status(400).json({"mensagem":"erro no cabare"})
            }        
        }).catch(error=>{
            console.log(error);
        });
        
    }
    
    logout(resp){
        resp.status(200).send({ auth: false, token: null });
    }
    /*
    createacessApi(resp,dados){
        
        let nivelAcessValue = dados.nivelAcess
        var token = jwt.sign({ idValue,nivelAcessValue }, 'KztwN21YQEpIYUNqTDhGP1Nnd1RXMyFlNlJMSy55ezhuaGd7NElBI2pDTnchU2xeMHw=');
        Conta.update({
            //nivelAcessChangeifIWant
            keyAcess:token
        },{where:{
            id:idValue
            }
        }).then(()=>{
            resp.status(200).json({ auth: true, token: token });
        })
        //resp.status(200).send({ auth: true, token: token });
    }
    */
    
    addCadastro(dados,resp){
        /*db.sync({ force: false })
            .then(() =>*/  
                Pessoa.create({
                nome:dados.nome,
                    Usuario:{
                        usuario:dados.usuario,
                        senha:encPassword(dados.senha),
                    },
                    DadosPessoai:{ 
                        cpf:dados.cpf,
                        dataNascimento:dados.dataNascimento,
                    },
                    Endereco:{
                        estado:dados.estado,
                        cidade:dados.cidade,
                        bairro:dados.bairro,
                        rua:dados.rua,
                        numero:dados.numero,
                        cep:dados.cep,
                        complemento:dados.complemento,
                    },
                    Contato:{
                        email:dados.nome,
                        telefone:dados.telefone,
                        celular:dados.celular,
                    }
                },{ include: [Conta, DadosPessoais, Endereco, Contato] }) //)
                .then((result,metadata) => {
                    resp.status(200).json(result)
                }).catch(error=>{
                    console.log(error);
                });
        //});
    }
    
    showOneCadastro(idValue,resp){
         
        Pessoa.findOne({
            where:{ 
                id:idValue.id
            },
            include: [Conta, DadosPessoais, Endereco, Contato],
        }).then(result => {
            resp.status(200).json({"result":result,"bla":"bla"})
            
        }).catch(error =>{
            resp.status(401).json({'erro':'erro'})
            
        })
    }
    /* 
    showCadastro(body,resp,next){
        Pessoa.findAll({
            include: [Conta, DadosPessoais, Endereco, Contato],
            }).then(result => {
                resp.status(200).json(result)
                
            }).catch(erro=>{ 
                resp.status(200).json(error)
            })
        
    }
    */
    editCadastro(idValue,resp){
        
        db.sync({ force: false })
            .then(() =>  Pessoa.update({
                nome:dados.nome,
                Usuario:{
                    usuario:dados.usuario,
                },
                DadosPessoai:{ 
                    cpf:dados.cpf,
                    dataNascimento:dados.dataNascimento,
                },
                Endereco:{
                    estado:dados.estado,
                    cidade:dados.cidade,
                    bairro:dados.bairro,
                    rua:dados.rua,
                    numero:dados.numero,
                    cep:dados.cep,
                    complemento:dados.complemento,
                },
                Contato:{
                    email:dados.nome,
                    telefone:dados.telefone,
                    celular:dados.celular,
                },where:{ 
                    id:idValue.id
                },
                }, { include: [Conta, DadosPessoais, Endereco, Contato] }))
                .then((result) => {
                    //console.log(result);
                    resp.status(200).json(result)
                });
        //});
    }
    
    delCadastro(idValue,resp){
       
        Pessoa.destroy({
            where:{ 
                id:idValue.id
            },
            //include: [Conta, DadosPessoais, Endereco, Contato],
        }).then(result => {
            if(result != 0){
                console.log('apagado')
            }else{
                console.log('erro')
            }
        }).catch(error =>{
            console.log(error);
        });
    }
}
module.exports =  new Cadastro;
