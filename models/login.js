var jwt = require('jsonwebtoken');

class Login{
    loginApi(dados,resp,next){
        const token = dados.headers['x-access-token'];
        if(!token) resp.status(401).json({ auth: false, message: 'No token provided.' });
        
        jwt.verify(token,'+;p7mX@JHaCjL8F?SgwTW3!e6RLK.y{8nhg{4IA#jCNw!Sl^0|',
            function(err,decoded) {
                if(err){
                    resp.status(500).json({ auth: false, message: 'token invalid.' });
                }else{
                    //if()
                    //console.log(decoded);
                    dados.userId = decoded.id
                    //dados.userNivelAcess = decoded.nivelAcessValue
                    //if(dados.userNivelAcess == 10){
                    //}else{
                    //}
                    next()   
                }
            
        })
    }
    //+;p7mX@JHaCjL8F?SgwTW3!e6RLK.y{8nhg{4IA#jCNw!Sl^0|
    //aw3129ojk)(&@#awd)wd-23901 @$(Iolawd#&*$}^)^~#%%¨%

    loginApiConta(dados,resp,next){
        const token = dados.headers['x-access-token'];
        if(!token) resp.status(401).json({ auth: false, message: 'No token provided.' });
        jwt.verify(token,'aw3129ojk)(&@#awd)wd-23901 @$(Iolawd#&*$}^)^~#%%¨%',
            function(err,decoded) {
                if(err){
                    resp.status(500).json({ auth: false, message: 'token invalid.' });
                }else{
                    
                    console.log(decoded.id)
                    //dados.userId = decoded.idValue
                    //console.log(dados.userId);
                    next()   
                }
            
        })
        /*
        jwt.verify(token,publicKey,{algorithms:["RS256"]},
            function(err,decoded) {
                if(err){
                    resp.status(500).json({ auth: false, message: 'token invalid.' });
                }else{
                    console.log(decoded);
                    next()   
                }
            
        })
        */
    }
}
module.exports = new Login