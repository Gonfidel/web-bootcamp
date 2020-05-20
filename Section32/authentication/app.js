require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const db = require('./models/db');
const router = require('./routes/router');


const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',router);
app.set('view engine', 'ejs');


const PORT = process.env.PORT ? process.env.PORT : 3000
app.listen(PORT, ()=> console.log("Server listening " + PORT));