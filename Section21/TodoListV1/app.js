const express = require('express')
const bodyParser = require('body-parser')
const https = require('https')
// const ejs = require('ejs')

const app = express()

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
// app.set('view engine','ejs');



app.get('/', function(req,res){


  https.get('https://pokeapi.co/api/v2/pokemon?limit=4',function(response){
  // https.get('https://api.magicthegathering.io/v1/cards',{header : {'Content-Type' : 'application/json; charset=UTF-8'}},function(response){
    response.on('data', function(data){
      const cardData = JSON.parse(data);
      console.log(cardData)
      // res.render('pokemon',{data: data})
    })
  })
  res.send('This is a testing page. Please view the node console for the error messages.')
});

app.listen(process.env.PORT || 3000, function(){
  console.log('Server has been started')
})