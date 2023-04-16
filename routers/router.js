import express from 'express';
let router = express.Router();

import links from './links.js';

// homepage
router.get('/', function(req, res, next) {
  res.render('page2', { title: 'config.title' });
});

links.forEach(function(link) {
    router.get(link.regex, function(req, res, next) {
    //   console.log("trying to open " + link.url);
      res.render(link.url, { title: link.title,  layout: 'page1', h1: link.h1, description: link.description});
    });
  });

  export default router;