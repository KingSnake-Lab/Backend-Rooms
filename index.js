const express = require('express');
const mysql = require('mysql');

const app = express();


const { test } = require('./Functions/test');

const host = '0.0.0.0'; // Escucha en todas las interfaces

// Resto de tu código Express aquí
app.get('/api/test', async (req, res) => {
  //Obtener el body
  //const { email, password } = req.body;
  console.log("holaa");


});

// Ruta para manejar la solicitud POST en '/miRuta'
app.post('/miRuta', (req, res) => {
  const textoRecibido = req.body; // Obtiene el texto del cuerpo de la solicitud POST
  console.log('Texto recibido:', textoRecibido);
  
  // Responde a la solicitud con un mensaje de éxito
  res.status(200).send('Texto recibido con éxito');
});

app.listen(3000, host, () => {
 
  console.log('Servidor Express iniciado en el puerto 3000');
});
