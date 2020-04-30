var jwt = require('jsonwebtoken');

class Login{
    loginApi(dados,resp,next){
        const token = dados.headers['x-access-token'];
        if(!token) resp.status(400).json({ auth: false, message: 'No token provided.' });
        jwt.verify(token,'KztwN21YQEpIYUNqTDhGP1Nnd1RXMyFlNlJMSy55ezhuaGd7NElBI2pDTnchU2xeMHw=',function(err,decoded) {
            if(err){
                resp.status(400).json({ auth: false, message: 'No token provided.' });
            }else{
                console.log(decoded.id);
                next()   
            }
            
        })
    }

}
module.exports = new Login