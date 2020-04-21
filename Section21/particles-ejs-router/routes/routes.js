const axios = require('axios');
const router = require('express').Router();
const bodyParser = require('body-parser');


router.get('/',function(req,res){
  res.render('pages/home');
})

router.get('/mtg',function(req,res){
  axios.get('https://api.magicthegathering.io/v1/cards')
    .then(response=>{
      const cards = response.data.cards;
      res.render('pages/mtg',{ cards });
    });
});


router.get('/pokemon',function(req,res){
  axios.get('https://pokeapi.co/api/v2/pokemon',{
    params: {
      limit: 151
    }
  }).then(response=>{
      const pokemon = response.data.results;
      res.render('pages/pokemon',{ pokemon });
    });
});



module.exports = router;