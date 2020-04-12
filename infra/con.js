const mysql = require('mysql');

    const conn = mysql.createConnection({
        host: 'localhost', 
        port:3306,
        user: 'nodeuser', 
        password: 'nodeuser@1234',
        database: 'mycle' 
    });
    
    /*conn.query(sqlQry, function(error, results, fields){
        if(error) 
            return res.json(error);
        else
            return res.json(results);  
          
        
    });
    
    conn.end();
    */
module.exports = conn;
