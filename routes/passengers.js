var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'), //mongo connection
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

router.use(bodyParser.urlencoded({ extended: true }))
router.use(methodOverride(function(req, res){
    console.log('estamos aqui');
      if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        // look in urlencoded POST bodies and delete it
        var method = req.body._method
        delete req.body._method
        return method
      }
}))

//this will be accessible from http://127.0.0.1:3000/blobs if the default route for / is left unchanged
router.route('/getPassengers')
    //GET all blobs
    .get(function(req, res, next) {
        //llamamos al model y por medio de "find" obtenemos todos los pasajeros desde Mongo
        mongoose.model('Passenger').find({}, function (err, passengers) {
            if (err) {
              return console.error(err);
            } else {
              /*
              mongoose.model('Passenger').create({
                name: String,
                lastName: String,
                gender: String,
                birthday: String,
                nacionality: String,
                numberOfDocument: String,
                documentType: String,
                bookingCode: String
              },function (err, blob) {


              });
*/





                  //respond to both HTML and JSON. JSON responses require 'Accept: application/json;' in the Request Header
                  res.json(passengers);
              }     
        });
    })
   
module.exports = router;