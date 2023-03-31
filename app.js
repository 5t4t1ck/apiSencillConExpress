const cors = require('cors');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3010;

app.get('/', (req, res) => {
    res.send('¡Bienvenido a mi API sencilla en Express!');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

app.get('/hello', (req, res) => {
    res.send('Hola, mundo!');
});

app.get('/goodbye', (req, res) => {
    res.send('Adiós, mundo!');
});

app.get('/cors', cors(), (req, res) => {
    res.send('Este endpoint permite CORS');
});

app.get('/no-cors', (req, res) => {
    res.send('Este endpoint no permite CORS');
});