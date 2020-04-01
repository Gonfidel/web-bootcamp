const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({extended: true}));


app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/index.html')
});
app.post('/',(req,res)=>{
  let w = Number(req.body.weight);
  let h = Number(req.body.height);
  let result = Math.round(w/Math.pow(h,2));
  res.send(`Your BMI is: ${result}`);
});


app.listen(3000,()=>console.log('Started server on :3000'));