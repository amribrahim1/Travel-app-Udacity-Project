const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors())
// to use json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

let projectData = {};
app.post('/add', function (req, res) {
    projectData = req.body;
    console.log('add')
    console.log(projectData) 
});

app.get('/all', function (req, res) {
    res.send(projectData);
    console.log('all')
    console.log(projectData) 
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

module.exports = app
