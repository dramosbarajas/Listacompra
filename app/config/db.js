/**
 * @author David Ramos
 * @email dramosbarajas@gmail.com
 * @create date 2018-08-09 09:20:02
 * @modify date 2018-08-09 09:20:02
 * @desc [description]
*/

//importamos los datos de configuracion
const config = require('./config.js')

//require mongoose module
var mongoose = require('mongoose');

let connectionString = `mongodb://${config.db.host}:${config.db.port}/${config.db.name}`;

//Exportando la funcion de conexion
module.exports =function(){

    mongoose.connect(connectionString, { useNewUrlParser: true }, ( err , res ) => {
        console.log("Connection OK", config.db.host,":",config.db.port)
    });
}