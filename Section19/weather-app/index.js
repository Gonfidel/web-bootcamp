const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const https = require('https')

//Enabled body parser to read HTTP method parameters
app.use(bodyParser.urlencoded({extended: true}));


//When user browses to the page, display input form
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'/index.html'));
})


//When user submits form from main page, display current weather data
app.post('/',function(req,res){
  //set output type to HTML to ensure it isn't displayed as a string
  res.contentType('html');

  //init url request string based on location param in request
  const query = req.body.city;
  const apiKey = '16cdb4dc5c7cc7a69983716554ab3da6';
  const unit = 'imperial';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=${unit}&appid=${apiKey}`;

  https.get(url,function(response){
    //display the status code of our weather API http call
    console.log(`OpenWeatherAPI Status Code: ${response.statusCode}`);

    response.on('data',function(data){
      const weatherData = JSON.parse(data);
      res.write(`<h2>The weather is currently ${weatherData.weather[0].description}.</h2>`);
      res.write(`<h3>The temperature in ${weatherData.name} is ${weatherData.main.temp}F</h3>`);
      res.write(`<img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png">`);
      res.send();
    })

  })
})




app.listen(3001,()=>console.log('Server is running on port 3000'))