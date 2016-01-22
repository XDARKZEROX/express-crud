var express = require('express');
var router = express.Router();
var mysql = require('mysql');
bodyParser = require('body-parser');
var userModel = require('../model/users.js');

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

        userModel.getAll(function(err, result){
            if (err) {
                res.json({ id: err.errno, message: err.code });
            } else {
                return res.json(result);
            }
        });
    })

    //Agregar un nuevo Usuario
    .post(function(req, res) {
        //creamos una variable donde almacenar los datos enviados por request
        var userData = {
            idusuario : req.body.id,
            nickName: req.body.nickName,
            nombre : req.body.name,
            apellido : req.body.lastName,
            pais : req.body.country,
            ciudad : req.body.city,
            contrasena : req.body.password,
            fechaingreso : reg.body.dateIn
        };

        userModel.addUser(userData,function(err, result){
            if (err) {
                res.json({ id: err.errno, message: err.code });
            } else {
                return res.json(result);
            }         
        });
    })

router.route('/user/:user_id')
    .get(function(req, res) {
        
        userModel.getUserByID(req.params.user_id,function(err, user){
            if (err) {
                res.json({ id: err.errno, message: err.code });
            } else {
                return res.json(user);
            }
        });
    })

module.exports = router;




