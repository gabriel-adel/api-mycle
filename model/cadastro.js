const con = require('../infra/con');

class Cadastro{
    /* 
    adicionaCadastro(cadastro){
        const sql = "INSERT into conta(usuario, senha) value ('$usuario',md5('$senha'))";
    }
    adicionaDadosPessoais(){
        const sql = "INSERT INTO dadospessoais(cpf,dataNascimento) value('$cpf','$dataNascimento')";
    }
    adicionaPessoa(){
        const sql = "INSERT INTO pessoa(nome,dataCadastro,sexo,id_login,id_dados_pessoais) value('$nome',now(),'$sexo','$idLogin','$idDados')";
    }
    adicionaContato(){
        const sql = "INSERT into contato(email,telefone,celular,id_pessoa) value('$email','$telefone','$celular','$idPessoa')";
    }
    adicionaEndereco(){
        const sql = "INSERT into endereco(estado,cidade,bairro,rua,numero,cep,id_pessoa,complemento) value('$estado','$cidade','$bairro','$rua','$numero','$cep','$idPessoa','$complemento')";
    }
    */
    adicionaCadastro(cadastro){
        const sql = "insert into conta set ?";
        con.query(sql, cadastro,(erro,result)=>{
            if(erro){
                console.log('erro');
            }else{
                console.log(result)
            }
        } )
    }
}
module.exports = new Cadastro;
/* 

$login = "INSERT into conta(usuario, senha) value ('$usuario',md5('$senha'))";
    $resultado2= mysqli_query($conexao, $login)or die(mysqli_error($conexao));
    $idLogin= mysqli_insert_id($conexao); 
    
    $dados="INSERT INTO dadospessoais(cpf,dataNascimento) value('$cpf','$dataNascimento')";
    $resultado2= mysqli_query($conexao, $dados)or die(mysqli_error($conexao));
    $idDados= mysqli_insert_id($conexao);

    $pessoa="INSERT INTO pessoa(nome,dataCadastro,sexo,id_login,id_dados_pessoais) value('$nome',now(),'$sexo','$idLogin','$idDados')";
    $resultado= mysqli_query($conexao, $pessoa)or die(mysqli_error($conexao));
    $idPessoa= mysqli_insert_id($conexao);

    
    
    $contato = "INSERT into contato(email,telefone,celular,id_pessoa) value('$email','$telefone','$celular','$idPessoa')";
    $resultado2= mysqli_query($conexao, $contato)or die(mysqli_error($conexao));
    
    $endereco = "INSERT into endereco(estado,cidade,bairro,rua,numero,cep,id_pessoa,complemento) value('$estado','$cidade','$bairro','$rua','$numero','$cep','$idPessoa','$complemento')";
$resultado2= mysqli_query($conexao, $endereco)or die(mysqli_error($conexao));


*/