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
  //dob: { type: Date, default: Date.now },
});
mongoose.model('passenger', passengerSchema);