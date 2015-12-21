var mongoose = require("mongoose");

var passengerSchema = new mongoose.Schema({  
  name: String,
  lastname: String,
  gender: String,
  birthday: String,
  nacionality: String,
  numberOfDocument: String,
  documentType: String,
  bookingCode: String
  //En caso de ser un objeto
  //dob: { type: Date, default: Date.now },
});
mongoose.model('passenger', passengerSchema);