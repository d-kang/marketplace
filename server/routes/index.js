'use strict';
const express = require('express');
const { layout } = require('../handlers');

const router = express.Router();

router.get('/', layout);

module.exports = router;
