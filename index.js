const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hola desde nuestra app 🐱‍👤');
})

app.post('/signup', (req,res) => {
    res.send('Endpoint para registro ✔✔ 🐱‍🚀')
})

app.listen(PORT, (req, res) => {
    console.log(`El servidor esta corriendo en el Puerto http:localhost:${PORT} 🐱‍🚀`);
})