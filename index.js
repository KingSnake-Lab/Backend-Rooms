const express = require('express');
const mysql = require('mysql');

const app = express();


const { test } = require('./Functions/test');


// Resto de tu código Express aquí
app.post('/api/test', async (req, res) => {
  //Obtener el body
  //const { email, password } = req.body;
  console.log("holaa");
  test(req, res);
});


app.listen(3001, () => {
 
  console.log('Servidor Express iniciado en el puerto 3001');
});
