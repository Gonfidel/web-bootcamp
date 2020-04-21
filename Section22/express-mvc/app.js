const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const router = require('./router');

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.use('/',router);


app.use((req,res)=>res.status(404).sendFile(__dirname+'/public/404.html'));
app.listen(3000,()=>console.log('started..'))