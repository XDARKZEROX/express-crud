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
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'mysql',
  database : 'prueba'
});

connection.connect();
