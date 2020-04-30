const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const https = require('https');
const ejs = require('ejs');

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine','ejs');

app.get('/',(req,res)=>{
  https.get('https://api.magicthegathering.io/v1/cards',function(response){
    response.on('data',function(data){
      const apiData = JSON.parse(data);
      console.log(apiData)
    })
  })
  res.render('index');
});


app.listen(process.env.PORT || 3050, function(){
  console.log(`Server has been started on port ${process.env.PORT!=null?process.env.PORT:3050}`);
})