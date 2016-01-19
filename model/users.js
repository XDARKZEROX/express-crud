//Esta clasese utilizara para crear los model para el objeto User
var mysql = require('mysql');
var mysqlconnection = require('../model/db.js');


//Al ser este archivo el model de User, en ese caso, toda las funciones
//de Base de datos se usaran aqui
exports.getAll = function(callback) {

	var query = "SELECT * FROM usuario";
	mysqlconnection.connect().query(query,function(err,usuarios){
            if(err) {
               callback(err, null);
            } else {
               callback(null, usuarios);
            }	
    });

}