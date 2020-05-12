require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const ejs = require('ejs');
const app = express();

const articleSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String
});

const Article = mongoose.model('Article', articleSchema);

mongoose.connect('mongodb://localhost:27017/section31',{ useNewUrlParser: true, useUnifiedTopology: true });

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
// app.use('/',articlesRouter);

app.route('/').get((req,res)=>res.redirect('/articles'));

app.route('/articles')
  .get((req,res)=>{
    Article.find({}, (err,result)=>{
      if(err) return res.send(err);
      res.send(result);
    })
  })
  .post((req,res)=>{
    Article.create({
      title: req.body.title,
      content: req.body.content,
      author: req.body.author
    }).then(
      res.send('Successfully added article.')
    ).catch(
      res.send('Error adding article')
    )
  })
  .delete((req,res)=>{
    Article.deleteMany({},(err)=>{
      if(err) return res.send(err);
      res.send("Successfully delete articles.")
    })
  });

app.route('/articles/:articleId')
  .get((req,res)=>{
    Article.find({_id: req.params.articleId}, (err,result)=>{
      if(err) return res.send(err);
      res.send(result);
    })
  })
  .put((req,res)=>{
    Article.replaceOne({_id: req.params.articleId},
      {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
      },
      (err,result)=>{
        if(err) return res.send(err);
        res.send('Successfully updated Article.')
    })
  })
  .patch((req,res)=>{
    Article.updateOne({_id: req.params.articleId},
      {content: req.body.content},
      (err,result)=>{
        if(err) return res.send(err);
        res.send('Successfully updated Article.')
    })
  })
  .delete((req,res)=>{
    Article.findByIdAndDelete(req.params.articleId,(err)=>{
      if(err) return res.send(err);
      res.send("Successfully delete articles.")
    })
  });




const port = process.env.PORT != null ? process.env.PORT : 3000;
app.listen(port,()=>{
  console.log("Server has started on "+ port);
})

