'use strict';

exports.storeMiddleware = (req, res, next) => {
  req.name = 'David';
  next();
};

exports.homePage = (req, res) => {
  res.render('index', {
    title: 'DK',
  });
};
