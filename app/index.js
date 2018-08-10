/**
 * @author David Ramos
 * @email dramosbarajas@gmail.com
 * @create date 2018-08-09 08:50:29
 * @modify date 2018-08-09 08:50:29
 * @desc Aplicación para el control de listas de la compra.
*/

//Importando express
const express = require('express');

//Instancia express
const app = express();

//Importacion de ficheros
const config = require('./config/config.js');
const db = require('./config/db.js');
console.log(db);;
//Defino variables 
let PORT = config.app.port || process.env.PORT;

//Arrancando servidor
try {
    app.listen(PORT ,() => {
        console.log("Escuchando en el puerto 3000!");
        db();
    })   
} catch (error) {
    console.log("Se ha producido un error");
}

//Primera ruta de prueba 

app.get('/index' ,  ( err , res ) => {
    res.send("Ruta index");
})
