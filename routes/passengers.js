var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'), //mongo connection
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

router.use(bodyParser.urlencoded({ extended: true }))

//Esto es un MiddleWare se disparará cada vez que se haga una llamada a cualquiera
//de los metodos de Passengers.js
//Para este ejemplo solo agregamos un console.log
router.use(function(req, res, next) {
    //Aca podriamos hacer un metodo para realizar un logger por ejemplo
    //o incluso validaciones de datos antes de realizar el query a la base de datos
    console.log('Estamos probando el MiddleWare');
    //Next se emplea para que el flujo al metodo requerido continue y no se
    //detenga en este paso
    next();
});

router.use(methodOverride(function(req, res){
      console.log('entramos al metodo override');
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
      }
}))

//definiremos la ruta por la que accederemos a obtener todos los pasajeros
router.route('/getPassengers')
    //GET all passengers
    .get(function(req, res, next) {
        //llamamos al model y por medio de "find" obtenemos todos los pasajeros desde Mongo
        mongoose.model('Passenger').find({}, function (err, passengers) {
            if (err) {
              //En caso de encontrar algun error o no encontrar algun dato se retorna
              //la respuesta como null
              return handleError(err);
            } else {
                res.json(passengers);
              }     
        }).select('-_id'); //se ignoran los campos que no desean ser mostrados
    })

router.route('/getPassenger/:passenger_id')
 // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
        console.log(req.params);
        mongoose.model('Passenger').findById(req.params.passenger_id, function(err, passenger) {
            if (err) {
              //En caso de encontrar algun error o no encontrar algun dato se retorna
              //la respuesta como null
              return handleError(err);
            } else {
              res.json(passenger);  
            }
        });
    });

module.exports = router;