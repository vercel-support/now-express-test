const express = require('express');
const session      = require('express-session');
const bodyParser = require('body-parser')
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const flash    = require('connect-flash');
const cors = require('cors');

require('dotenv').config();
import localSignInStrategy from './passport/localSignup';
import localLoginStrategy from './passport/localLogin';

export const middlewareSetup = (app) => {
    // app.use(express.static(path.join(__dirname, '../build')));
    //  app.get('/', function (req, res) {
    //    res.sendFile(path.join(__dirname, 'build', 'index.html'));
    //  });
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
        
    app.use(morgan('dev')); // log every request to the console
    app.use(cookieParser()); // read cookies (needed for auth)

    // required for passport
    console.log('process.env.EXPRESS_SESSION_KEY', process.env.EXPRESS_SESSION_KEY);

    app.use(session(
      { 
        secret: 'testkey',
        resave: true,
        saveUninitialized: true
      }
    )); // session secret
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions
      
    localSignInStrategy(passport);
    localLoginStrategy(passport);

    app.use(flash()); // use connect-flash for flash messages stored in session
      
    app.use(cors({ credentials: true }));
    
    //test
    app.get('/ping', function(req, res) {
      res.sendStatus(200);
    });
}