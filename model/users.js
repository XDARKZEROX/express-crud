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

exports.getUserByID = function(user_id,callback) {

	var query = "SELECT * FROM ?? WHERE ??=?";
	var table_format = ["usuario","idusuario",user_id];
	query = mysql.format(query,table_format);
    mysqlconnection.connect().query(query,function(err,usuario){
            if(err) {
            	callback(err, null);
            } else {
            	callback(null, usuario);
            }	
    });
}

exports.addUser = function(userData,callback) {

	var query = "INSERT INTO usuario SET ?";
	var table_format = [userData];
	query = mysql.format(query,table_format);
	mysqlconnection.connect().query(query,function(err,usuario){
            if(err) {
            	callback(err, null);
            } else {
            	callback(null, usuario);
            }	
    });
}

exports.deleteUser = function(id, callback) {

	var query = "DELETE FROM usuario where ?? = ?";
	var table_format = ["idusuario",id];
	query = mysql.format(query,table_format);
	console.log(query);
	mysqlconnection.connect().query(query,function(err,usuario){
            if(err) {
            	callback(err, null);
            } else {
            	callback(null, usuario);
            }	
    });
}