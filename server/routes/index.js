'use strict';
const express = require('express');
const {
  storeMiddleware,
  homePage } = require('../controllers/storeController');

const router = express.Router();

router.get('/', storeMiddleware, homePage);

module.exports = router;
