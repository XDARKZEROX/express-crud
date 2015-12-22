var mongoose = require("mongoose");

var passengerSchema = new mongoose.Schema({  
  name: String,
  lastName: String,
  gender: String,
  birthday: String,
  nacionality: String,
  numberOfDocument: String,
  documentType: String,
  bookingCode: String
  //En caso de ser un objeto
  //dob: { type: Date, default: Date.now },
});

//Usar el tercer parametro para indicar una coleccion ya existente,
//En caso no colocar se creara uno nuevo pero en plural, en este caso se llamaria
//passengers
mongoose.model('Passenger', passengerSchema,'passenger');

/*
var newPassenger = mongoose.model('Passenger');
var johndoe = new newPassenger ({
      name: 'Alexnder'
});

// Saving it to the database.
johndoe.save(function (err) {if (err) console.log ('Error on save!')});
*/