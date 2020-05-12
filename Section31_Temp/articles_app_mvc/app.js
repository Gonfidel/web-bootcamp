require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const db = require('./config/db');
const router = require('./config/router');
const path = require('path');

const app = express();

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'/public')));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', router);



const port = process.env.PORT != null ? process.env.PORT : 3000;
app.listen(port,()=>{console.log("Server started on port: " + port)});