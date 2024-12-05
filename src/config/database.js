const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'snk',
  port: 8889 
});

connection.connect((err) => {
  if (err) {
    console.error('ERREUR DE CO !!!! ', err);
    return;
  }
  console.log('Connecté');
});

module.exports = connection;
