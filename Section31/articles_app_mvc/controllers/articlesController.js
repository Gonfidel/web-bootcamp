const Article = require('../models/Article');

module.exports.index = (req,res) => {
  Article.find({},(err,result)=>{
    if(err) return res.send(err);
    return res.send(result);
  })  
}

module.exports.create = (req,res) => {
  const article = new Article({title: req.body.title, content: req.body.content});
  article.save((err,article)=>{
    if(err) return res.send(err);
    res.send('Successfully added article');
  })
}

module.exports.deleteAll = (req,res) => {
  Article.deleteMany({},(err)=>{
    if(err) return res.send(err);
    res.send('Successfully deleted all articles');
  })
}

module.exports.show = (req,res) => {
  Article.find({_id: req.params.articleId},(err,result)=>{
    if(err) return res.send(err);
    res.send(result);
  })
}

module.exports.replace = (req,res) => {
  Article.replaceOne(
    {_id: req.params.articleId},
    req.body,
    (err)=>{
      if(err) return res.send(err);
      res.send('Successfully replaced article.');
    }
  );
}

module.exports.update = (req,res) => {
  Article.updateOne(
    {_id: req.params.articleId},
    {$set: req.body},
    (err,raw)=>{
      if(err) return res.send(err);
      res.send('Successfully patched article.');
    }
  );
}

module.exports.delete = (req,res) => {
  Article.deleteOne(
    {_id: req.params.articleId},
    (err) => {
      if(err) return res.send(err);
      res.send('Successfully deleted article.');
    }
  );
}

