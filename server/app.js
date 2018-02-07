'use strict';
const express = require('express');
const routes = require('./routes/index');

const app = module.exports = express();

app.use('/', routes);
