const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const cors = require('cors')
const dogModule = require('./backEnd/js/dogs.js')

const app = express();
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(cors())
app.use(express.static(__dirname + '/frontEnd'))

const port = 8080;

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join('/index.html'));
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/doggo', function (req, res) {
    res.json(dogModule)
});

// POST method route
app.post('/doggo', function (req, res) {
    var newDog = req.body;
    console.log(newDog);
    dogModule.dogs.push(newDog);
    res.send('POST request to the homepage')
});

const server = app.listen(port, function () {
    console.log('express server listening on port ' + server.address().port);
})