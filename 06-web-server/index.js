const express = require('express')

const app = express()
const port = 8080;

// Handlebar
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials');

//TODO: require('hbs')
app.set('view engine', 'hbs');

// Servir contenido estatico - Middleware
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {
        nombre: "Carlos Ramirez",
        titulo: "Curso de node"
    });
})

app.get('/elements', (req, res) => {
    // res.sendFile(__dirname + ('/public/elements.html'));
    res.render('elements', {
        nombre: "Carlos Ramirez",
        titulo: "Curso de node"
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: "Carlos Ramirez",
        titulo: "Curso de node"
    });
})


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})


app.listen(port, () => {
    console.log(`Servidor Corriendo puerto: ${port}`)
})