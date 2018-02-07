'use strict';
const express = require('express');
const {
  middlewareLogger,
  homePage,
  addItem,
  createItem } = require('../controllers/itemController');

const router = express.Router();

router.use(middlewareLogger);

router.get('/', homePage);

router.get('/add', addItem);

router.post('/add', createItem);

module.exports = router;
