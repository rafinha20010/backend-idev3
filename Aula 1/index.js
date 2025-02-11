const express = require('express');

const app = express()

const port = 3000;

app.get('/', (req, res) => {
    res.send('Main')
});

app.get('/login', (req, res) => {
    res.send('Login')
});

app.get('/home', (req, res) => {
    res.send('Home')
});



app.listen(port, ()=>{
    console.log('servidor rodando na porta', port);
})  
