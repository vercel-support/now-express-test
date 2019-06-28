const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();
const app = express();
const path = require('path');

import { middlewareSetup } from './middlewareSetup';
import User from './models/user';
import authApiRoutes from './api/auth';
import userApiRoutes from './api/user';
import accountApiRoutes from './api/account';

  // this is our MongoDB database.
  const dbRoute =
    'mongodb+srv://kdog:phoenixwang@k0-heqxk.mongodb.net/test?retryWrites=true&w=majority';

  mongoose.connect(dbRoute, { useNewUrlParser: true });

  let db = mongoose.connection;

  db.once('open', () => console.log('connected to the database'));
  // checks if connection with the database is successful
  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  
  User.find({}, function(err, users) {
    if (err) throw err;
    // object of all the users
    console.log(users);
  });

  app.set('view engine', 'ejs')
  app.set('views', path.join(__dirname, '/views'))
  app.engine('.ejs', require('ejs').__express)
  
  middlewareSetup(app);

  app.use('/api/user', userApiRoutes);
  app.use('/api/auth', authApiRoutes);
  app.use(accountApiRoutes);

//app.use('/api', apiRoutes)
// const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// console.log('process.env.SENDGRID_API_KEY', process.env.SENDGRID_API_KEY);
// const msg = {
//   to: 'dianna.xi.wang@gmail.com',
//   from: 'kanghongchen@gmail.com',
//   subject: 'Send grid email test',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong></strong>',
// };
// sgMail.send(msg);

app.listen(process.env.PORT || 8080);

// module.exports = app;

// if (process.env.TARGET === "now") {
//   module.exports = app
// } else {
//   app.set("port", process.env.PORT || 8080)
//   app.listen(app.get("port"), () => console.log(`Listening on port ${app.get("port")}`))
// }