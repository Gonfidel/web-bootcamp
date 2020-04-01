const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get('/',(req,res)=>{
  res.sendFile(__dirname+"/index.html");
});

app.post('/',(req,res)=>{
  let num1 = Number(req.body.primary); //these are based on name attribute
  let num2 = Number(req.body.secondary);
  let result = num1+num2;
  res.send(`Your result is: ${result}`);
});
app.listen(3000,()=>console.log('Server started..'));