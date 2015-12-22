//Conexión a mongodb

//Si quisieramos chequear las dependencias que no estan
//actualizadas usaremos el comando npm outdated

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/paquetes');

//Este còdigo nos permite saber si la Conexion a la base de datos fue correcta
/*
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("Conexion establecida");
});*/