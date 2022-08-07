const express=require('express');
var path=require('path');
var bodyParser=require('body-parser');
require('dotenv').config();
/* var cookieParser=require('cookie-parser'); */
var cookieParser=require('cookie-parser');



/* var indexRouter=require('./routes/index'); */

var dbConnection=require('./database/db');
const { test } = require('./controllers');
const { contact_create } = require('./controllers/index');
const { contact_list } = require('./controllers');
const { contact_update } = require('./controllers');
const { contact_delete } = require('./controllers');
const { contact_details } = require('./controllers');
const { contact_create_post } = require('./controllers');




var app=express();
app.use('/tests',test)
app.use('/contact',contact_create);



  app.listen(5000, () => {
    console.log('Express server started at port : 5000');
});
  
  module.exports = app;