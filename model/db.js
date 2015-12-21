//Conexión a mongodb
//Si quisieramos chequear las dependencias que no estan
//actualizadas usaremos el comando npm outdated

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mandrillocal');
