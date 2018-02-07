'use strict';

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const routes = require('./routes/index');

const app = module.exports = express();
const helpers = require('./helpers');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, '../public')));

app.use(cookieParser());

app.use((req, res, next) => {
  res.locals.h = helpers;
  next();
});

app.use('/', routes);