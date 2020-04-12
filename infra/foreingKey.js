const conn = require('./con');
/* 
class ForeignKey{
    init(){
        this.conexao = conn;
        this.foreingKeyContato();
        this.foreingKeyEndereco();
        this.foreingKeyPessoa1();
        this.foreingKeyPessoa2();
        this.foreingKeyPessoa3();
        this.foreingKeyPedidos();

    }
    foreingKeyContato(){
        const sql = `
        alter table contato add foreign key(id_pessoa) references pessoa(idPessoa);`
        this.conexao.query(sql,error=> {
            if(error){
                console.log('erro ao criar a tabela');
            }else{
                console.log('criada');
            }
        })
    }
    foreingKeyEndereco(){
        const sql = `alter table endereco add foreign key(id_pessoa) references pessoa(idPessoa);`
        this.conexao.query(sql,error=> {
            if(error){
                console.log('erro ao criar a tabela');
            }else{
                console.log('criada');
            }
        })
    }
    foreingKeyPessoa1(){
        const sql = `alter table pessoa add foreign key(id_login) references conta(idLogin);`
        this.conexao.query(sql,error=> {
            if(error){
                console.log('erro ao criar a tabela');
            }else{
                console.log('criada');
            }
        })
    }
    foreingKeyPessoa2(){
        const sql = `alter table pessoa add foreign key(id_dados_pessoais) references pessoa(idPessoa);`
        this.conexao.query(sql,error=> {
            if(error){
                console.log('erro ao criar a tabela');
            }else{
                console.log('criada');
            }
        })
    }
    foreingKeyPessoa3(){
        const sql = `alter table pedidos add foreign key(id_produto) references produto(idProduto);`
        this.conexao.query(sql,error=> {
            if(error){
                console.log('erro ao criar a tabela');
            }else{
                console.log('criada');
            }
        })
    }
    foreingKeyPedidos(){
        const sql = `alter table pedidos add foreign key(id_pessoa) references pessoa(idPessoa);`
        this.conexao.query(sql,error=> {
            if(error){
                console.log('erro ao criar a tabela');
            }else{
                console.log('criada');
            }
        })
    }
}
module.exports = new ForeignKey;



alter table pedidos add foreign key(id_pessoa) references pessoa(idPessoa)


IF NOT EXISTS(SELECT NULL FROM INFORMATION_SCHEMA.CONSTRAINT_COLUMN_USAGE WHERE [pedidos] = 'id_pessoa' AND [pessoa] = 'idPessoa')
BEGIN
    ALTER TABLE pedidos
    ADD FOREIGN KEY (id_pessoa)
    REFERENCES pessoa(idPessoa)
END

*/