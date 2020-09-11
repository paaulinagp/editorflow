const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

app.get('/', function (req, res) {
  res.send('Saludos desde express');
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/sendFlow', function (req, res) {
  const data = req.body.data;
  const jsonDownload = JSON.stringify(data);
  fs.writeFileSync(`${req.body.fileName}.json`, jsonDownload);
  res.send('Exito');
});

app.get('/getStepper', function (req, res) {
  var contents = JSON.parse(fs.readFileSync('./stepper.json'));
  res.send(contents);
});

app.get('/getFlow', function (req, res) {
  var contents = JSON.parse(fs.readFileSync('./diagrama.json'));
  res.send(contents);
});


app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});