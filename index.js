const express = require('express');
const morgan = require('morgan')
const app = express();
const PORT = 3000;

app.use(morgan('tiny'))

app.use((req, res, next) =>{
    console.log('se ejecuto un endpoint');
    next();
})
app.get('/', (req, res) => {
    res.send('Hola desde nuestra app 🐱‍👤');
})

app.post('/signup', (req,res) => {
    res.send('Endpoint para registro ✔✔ 🐱‍🚀')
})

app.listen(PORT, (req, res) => {
    console.log(`El servidor esta corriendo en el Puerto http:localhost:${PORT} 🐱‍🚀`);
})