var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'), //mongo connection
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

//Esto es un MiddleWare se disparará cada vez que se haga una llamada a cualquiera
//de los metodos de Passengers.js
//Para este ejemplo solo agregamos un console.log
//router.use(bodyParser.text());
//router.use(bodyParser.urlencoded({ extended: false }));
//router.use(bodyParser.json());

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
router.route('/passengers')
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
        }).select('-_id'); //en esta funcion puedo mostrar los campos que deseo y que no, si no quiero mostrar el
        //id se antepone el '-'
    })

    .post(function(req, res) {
        //creamos un objeto de nuestro modelo y seteamos los parametros
        mongoose.model('Passenger').create({
            name : req.body.name,
            lastName : req.body.lastName,
            gender : req.body.gender,
            birthday : req.body.birthday,
            nacionality: req.body.nacionality,
            numberOfDocument : req.body.numberOfDocument,
            documentType: req.body.documentType,
            bookingCode: req.body.bookingCode
        }, function (err, passenger) {
              if (err) {
                  res.send("Ocurrio un error al momento de agregar el Pasajero");
              } else {
                  res.json(passenger);
              }
        })
        
        res.json({ message: 'Pasajero creado correctamente' });
    })

router.route('/passenger/:passenger_dni')
    .get(function(req, res) {
        //Si deseamos obtener por el id de la coleccion podriamos utilizar
        //findById(req.params.passenger_id, function(err, passenger) {
        mongoose.model('Passenger').findOne({'numberOfDocument': req.params.passenger_dni}, function(err, passenger) {
            if (err) {
              //En caso de encontrar algun error o no encontrar algun dato se retorna
              //la respuesta como null
              return handleError(err);
            } else {
              res.json(passenger);  
            }
        }).select('name lastName nacionality documentType bookingCode -_id');
    })

     //Método para eliminar un pasajero por medio de DELETE, el parametro a agregar por get deberá ser el id
     //del pasajero.
    .delete(function(req, res) {
        mongoose.model('Passenger').remove({
            _id: req.params.passenger_dni
        }, function(err, pasenger) {
            if (err){
              res.send(err);
            } else {
              res.json({ message: 'Se eliminó el pasajero.' });
            }
        });
    });

module.exports = router;