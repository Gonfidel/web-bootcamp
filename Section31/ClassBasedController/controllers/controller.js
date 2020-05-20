class Controller {
  constructor(_model,_routeParam){
    this.model = _model;
    this.routeParam = _routeParam;
  }

  getModel = () => {
    console.log(this.model);
  }

  getRouteParam = () => {
    console.log(this.routeParam);
  }

  index = (req,res) => {
    this.model.find({},(err,result)=>{
      if(err) return res.send(err);
      return res.send(result);
    })  
  }

  create = (req,res) => {
    const newModel = new this.model(req.body);
    newModel.save((err,model)=>{
      if(err) return res.send(err);
      res.send('Successfully added model');
    })
  }

  deleteAll = (req,res) => {
    this.model.deleteMany({},(err)=>{
      if(err) return res.send(err);
      res.send('Successfully deleted all models');
    })
  }

  show = (req,res) => {
    this.model.find({_id: req.params[this.routeParam]},(err,result)=>{
      if(err) return res.send(err);
      res.send(result);
    })
  }

  replace = (req,res) => {
    this.model.replaceOne(
      {_id: req.params[this.routeParam]},
      req.body,
      (err)=>{
        if(err) return res.send(err);
        res.send('Successfully replaced model.');
      }
    );
  }

  update = (req,res) => {
    this.model.updateOne(
      {_id: req.params[this.routeParam]},
      {$set: req.body},
      (err,raw)=>{
        if(err) return res.send(err);
        res.send('Successfully patched model.');
      }
    );
  }

  delete = (req,res) => {
    this.model.deleteOne(
      {_id: req.params[this.routeParam]},
      (err) => {
        if(err) return res.send(err);
        res.send('Successfully deleted model.');
      }
    );
  }
}

module.exports = Controller;