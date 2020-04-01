//jshint esversion6

const express = require("express");
const app = express();


app.get("/", function(request,response){
  response.send("Hello");

});

app.get('/contact',(req,res)=>{
  res.send("<h1>Contact me</h1>")
});
app.get('/about',(req,res)=>{
  res.send('My name is Nic.')
});
app.get('/staff',(req,res)=>{
  res.send('Nic is the only staff..')
});

app.listen(3000,()=>console.log("Server started on port 3000.."));