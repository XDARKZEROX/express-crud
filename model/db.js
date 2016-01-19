var mysql = require('mysql');
//Conexión a mongodb

//Si quisieramos chequear las dependencias que no estan
//actualizadas usaremos el comando npm outdated

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/paquetes');

//mongoose.connect('mongodb://node:node@novus.modulusmongo.net:27017/Iganiq8o'); //para conectarse a una base de datos remota

//Este còdigo nos permite saber si la Conexion a la base de datos fue correcta
/*
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("Conexion establecida");
});*/

//Mysql Connection
//Al ser esto una conexiòn no global, esportaremos la funciòn de
//conectar la base de datos Mysql

//esto puede llamar a la funcion createConnection o createPool

/*var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'mysql',
    database : 'prueba',
    connectionLimit: 50,
    supportBigNumbers: true
});
connection.connect();
module.exports = connection;
*/

exports.connect = function(e) {
  var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'mysql',
    database : 'prueba',
    connectionLimit: 50,
    supportBigNumbers: true
  });  
  
  return connection;
}

/*
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});*/