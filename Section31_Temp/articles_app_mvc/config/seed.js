const db = require('./db');
const Article = require('../models/Article');
const faker = require('faker');

Array.from(Array(50)).forEach(()=>{ // Create array with length of 50 and interate, creating new articles
  Article.create({
    title: faker.lorem.words(),
    content: faker.lorem.paragraph()
  });
});

console.log("Seeding completed.");

