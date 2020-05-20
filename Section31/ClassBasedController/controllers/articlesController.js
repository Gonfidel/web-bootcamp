const Article = require('../models/Article');
const Controller = require('./controller');

const articlesController = new Controller(Article,"articleId");

module.exports = articlesController;
