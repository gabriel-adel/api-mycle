

const Sequelize = require('sequelize');
const db = require('../config/con');
const crypto = require('crypto');



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
    },sexo:{
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
                usuario:dados.usuarioEnv,
                senha:encPassword(dados.senhaEnv),
            }
        }).then((result) => {
            if(result != null){
                //resp.status(201).json(result)
                resp.status(201).send('erro no cabare')
                /*if(result.permissao != 0){const id = result.id;this.updateClient(resp,dados,id);}*/
            }else{
                resp.status(400).json('erro no cabare')
            }        
        }).catch(error=>{
            console.log(error);
        });
        
    }
    
    logout(dados,resp){

    }
    
    /*
    createacessApi(resp,idValue,nivel){
        var token = jwt.sign({ idValue }, 'KztwN21YQEpIYUNqTDhGP1Nnd1RXMyFlNlJMSy55ezhuaGd7NElBI2pDTnchU2xeMHw=');
        Conta.update({
            permissao:true,
            //nivelAcessChangeifIWant
            nivelAcess:nivel,
            keyAcess:token
        },{where:{
            id:idValue
            }
        }).then(()=>{
            resp.status(200).send({ auth: true, token: token });
        })
        //resp.status(200).send({ auth: true, token: token });
    }
    */
    
    addCadastro(dados,resp){
        db.sync({ force: false })
            .then(() =>  
                Pessoa.create({
                nome:dados.nomeEnv,
                sexo:dados.sexoEnv,
                Usuario:{
                    usuario:dados.usuarioEnv,
                    senha:encPassword(dados.senhaEnv),
                    //senha:encPassword('dados.senha'),
                },
                DadosPessoai:{ 
                    cpf:dados.cpfEnv,
                    dataNascimento:dados.dataNascimentoEnv,
                },
                Endereco:{
                    estado:dados.estadoEnv,
                    cidade:dados.cidadeEnv,
                    bairro:dados.bairroEnv,
                    rua:dados.ruaEnv,
                    numero:dados.numeroEnv,
                    cep:dados.cepEnv,
                    complemento:dados.complementoEnv,
                },
                Contato:{
                    email:dados.nomeEnv,
                    telefone:dados.telefoneEnv,
                    celular:dados.celularEnv,
                }
                }, { include: [Conta, DadosPessoais, Endereco, Contato] }) )
                .then((result,metadata) => {
                    
                    resp.status(201).json(result)
                    
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
            resp.json(result);
            
        }).catch(error =>{
            console.log(error);
        })
        /*
        Pessoa.findAll({
            include: [Conta, DadosPessoais, Endereco, Contato],
            }).then(result => {
                resp.status(201).json(result)
            })
        */
    }
    showCadastro(body,resp,next){
        Pessoa.findAll({
            include: [Conta, DadosPessoais, Endereco, Contato],
            }).then(result => {
                resp.status(201).json(result)
                
            }).catch(erro=>{ 
                resp.status(201).json(error)
            })
        
    }
    editCadastro(idValue,resp){
        //console.log(resp.senhaEnv);
        db.sync({ force: false })
            .then(() =>  Pessoa.update({
                nome:dados.nomeEnv,
                sexo:dados.sexoEnv,
                Usuario:{
                    usuario:dados.usuarioEnv,
                    senha:encPassword(dados.senhaEnv),
                    
                    
                },
                DadosPessoai:{ 
                    cpf:dados.cpfEnv,
                    dataNascimento:dados.dataNascimentoEnv,
                },
                Endereco:{
                    estado:dados.estadoEnv,
                    cidade:dados.cidadeEnv,
                    bairro:dados.bairroEnv,
                    rua:dados.ruaEnv,
                    numero:dados.numeroEnv,
                    cep:dados.cepEnv,
                    complemento:dados.complementoEnv,
                },
                Contato:{
                    email:dados.nomeEnv,
                    telefone:dados.telefoneEnv,
                    celular:dados.celularEnv,
                },where:{ 
                    id:idValue.id
                },
                }, { include: [Conta, DadosPessoais, Endereco, Contato] }))
                .then((result) => {
                    //console.log(result);
                    resp.status(201).json(result)
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
