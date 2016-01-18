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
        mysqlconnection.query(query,function(err,usuarios){
            if(err) {
                return handleError(err);
            } else {
                res.json(usuarios);
            }
        });
    })

router.route('/users/:user_id')
    .get(function(req, res) {
        
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table_format = ["usuario","idusuario",req.params.user_id];
        
        query = mysql.format(query,table_format);
        mysqlconnection.query(query,function(err,user){
             if(err) {
                return handleError(err);
            } else {
                res.json(user);
            }
        });
    })

module.exports = router;




