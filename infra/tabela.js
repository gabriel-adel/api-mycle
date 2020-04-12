const conn = require('./con');
/* 
class Tabelas{ 
    init(){
        this.conexao = conn;
        this.tableProduto();
        this.tableConta();
        this.tableContato();
        this.tableEndereco();
        this.tablePessoa();
        this.tableDadosPessoais();
        this.tablePedido();
    }
    tableProduto(){
        const sql = `create table produto if not exists(idProduto int not null auto_increment primary key, nomeProduto varchar(40) not null, cor varchar(20),valorAtacad decimal(5,2),valorVarejo decimal(5,2) not null, descProduto
        varchar(200) not null, codigoProduto varchar(32) not null, dataProduto date not null, tamanhoMinimo int, tamanhoMaximo int,tag varchar(200))Engine = Innodb, charset = utf8;`
        this.conexao.query(sql,error=> {
            if(error){
                console.log('erro ao criar a tabela');
            }else{
                console.log('criada');
            }
        })
    }
    tableConta(){
        const sql = `create table conta if not exists(idLogin int not null primary key auto_increment, usuario varchar(100) not null, senha varchar(32) not null, id_pessoa int not null)Engine = Innodb, charset  = utf8;
`
        this.conexao.query(sql,error=> {
            if(error){
                console.log('erro ao criar a tabela');
            }else{
                console.log('criada');
            }
        })
    }
    tableContato(){
        const sql = `create table contato if not exists(idContato int not null primary key auto_increment, email varchar(255) not null, telefone varchar(16), celular varchar(16) not null,id_pessoa int not null)Engine = Innodb, charset  = utf8;`
        this.conexao.query(sql,error=> {
            if(error){
                console.log('erro ao criar a tabela');
            }else{
                console.log('criada');
            }
        })
    }
    tableEndereco(){
        const sql = `create table endereco if not exists(idEndereco int not null primary key auto_increment, estado varchar(50) not null, cidade varchar(50) not null,bairro varchar(50) not null 
        ,rua varchar(50) not null,numero int not null, cep varchar(10),id_pessoa int not null,complemento varchar(100))Engine = Innodb, charset  = utf8;
    `
        this.conexao.query(sql,error=> {
            if(error){
                console.log('erro ao criar a tabela');
            }else{
                console.log('criada');
            }
        })
    }
    
    tablePessoa(){
        const sql = `create table pessoa if not exists(idPessoa int not null primary key auto_increment,nome varchar(200) not null, dataCadastro date not null, sexo enum('F','M'), id_login int not null,id_dados_pessoais int not null)Engine = Innodb, charset = utf8;`
        this.conexao.query(sql,error=> {
            if(error){
                console.log('erro ao criar a tabela');
            }else{
                console.log('criada');
            }
        })
    }
    tableDadosPessoais(){
        const sql = `create table dadosPessoais if not exists(idDadosPessoais int not null auto_increment primary key,cpf varchar(15) not null,dataNascimento date not null)Engine = Innodb, charset = utf8;`
        this.conexao.query(sql,error=> {
            if(error){
                console.log('erro ao criar a tabela');
            }else{
                console.log('criada');
            }
        })
    }
    tablePedido(){
        const sql = `create table pedidos if not exists(idPedido int not null primary key auto_increment, id_produto int not null, valorTotal decimal(6,2) not null, quantidade int not null, id_pessoa int not null,dataCompra date)Engine = Innodb,charset = utf8;`
        this.conexao.query(sql,error=> {
            if(error){
                console.log('erro ao criar a tabela');
            }else{
                console.log('criada');
            }
        })
    }
    

}
module.exports = new Tabelas

*/