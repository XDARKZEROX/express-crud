var express = require('express');
var router = express.Router();
var mysql = require('mysql');
bodyParser = require('body-parser');
var mysqlconnection = require('../model/db.js');

router.use(function(req, res, next) {
    //Aca podriamos hacer un metodo para realizar un logger por ejemplo
    //o incluso validaciones de datos antes de realizar el query a la base de datos
    console.log('Estamos probando el MiddleWare de users');
    //Next se emplea para que el flujo al metodo requerido continue y no se
    //detenga en este paso
    next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.route('/users')
	.get(function(req, res, next) {

		var query = "SELECT * FROM usuario";
        //var table = ["user_login"];
        // query = mysql.format(query,table);
        //var connection = mysqlconnection.connection();
        mysqlconnection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });
    })

module.exports = router;




