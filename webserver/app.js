const express = require('express')
const hbs = require('hbs')
const app = express()
const port = 8080;

app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/parcials', function (err) {});

//Mostrar contenido estatico

app.use( express.static('public') );

app.get('/', (req,res) => {
  res.render('home', {
    nombre: 'esteban',
    titulo: 'asdd'
  });
});

app.get('/elements', (req,res) => {
  res.render('elements', {
    nombre: 'esteban',
    titulo: 'asdd'
  });
});

app.get('/generic', (req,res) => {
  res.render('generic', {
    nombre: 'esteban',
    titulo: 'asdd'
  });
});

app.get('*', function (req, res) {
    //res.send('404 | Not Found')
    //res.sendFile()
  })

app.listen(8080)