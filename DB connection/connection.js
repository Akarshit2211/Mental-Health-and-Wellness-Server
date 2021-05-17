const mysql = require('mysql');

//making a connection to mysql database
const mysqlconnection = mysql.createConnection({
    host: 'b7q5bcdhzktuy4yauwey-mysql.services.clever-cloud.com',
    user: 'umjofxv0cyfoxu6a',
    password: 'ttMD3fchh94pq4QGrJzv',
    database: 'b7q5bcdhzktuy4yauwey',
    multipleStatements: true
});

//verifying if the connection is established
mysqlconnection.connect((err) => {
    if(!err){
        console.log('Connected');
    }
    else{
        console.log('Not Connected' + err.message);
    }
});

module.exports = mysqlconnection;