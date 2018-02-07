'use strict';

const mongoose = require('mongoose');
const Item = mongoose.model('Item');

exports.middlewareLogger = (req, res, next) => {
  console.log('------>>>>>>>>>>>>>>>');
  console.log(`${req.method} to ${req.path}`);
  console.log('req.query', req.query);
  console.log('req.body', req.body);
  console.log('req.params', req.params);
  console.log('<<<<<<<<<<<<<<--------');
  next();
};

exports.homePage = (req, res) => {
  res.render('index', {
    title: 'DK',
  });
};

exports.addItem = (req, res) => {
  res.render('editItem', {
    title: 'Add Item',
  });
};

exports.createItem = (req, res) => {
  console.log('createItem>>>>>');
  const item = new Item(req.body);
  item.save()
    .then(data => res.send(data))
    .catch(console.error);
};
