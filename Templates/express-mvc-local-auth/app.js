require('dotenv').config()

const express = require('express')
, app = express()
, ejs = require('ejs')
, router = require('./config/router')
, passport = require('passport')
, connection = require('./config/database')
, session = require('express-session')

//config express settings - port, view engine, and static files
app.set('port',process.env.PORT)
app.set('view engine','ejs')
app.use(express.static(__dirname + '/public'))

//configure express body-parser and session middleware
app.use(require('body-parser').urlencoded({ extended: true }))
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  // store: <'use mongo connect'>,
  cookie:{
    maxAge: 86400000 // one day : 1000 * 60 * 60 * 24
  }
}))

//configure passport middleware
require('./config/passport')
app.use(passport.initialize())
app.use(passport.session())

//configure session information logging
// app.use(require('./middleware/sessionLogger'))

//configure app routes
app.use('/',router)

module.exports = app