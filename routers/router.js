import express from 'express';
let router = express.Router();

import links from './links.js';
import linksVolgograd from './linksVolgograd.js';

// homepage
// router.get('/', function(req, res, next) {
//   res.render('main', { title: 'config.title' });
// });

links.forEach(function(link) {
    router.get(link.url, function(req, res, next) {
    //   console.log("trying to open " + link.url);
      res.render(link.page, { h2: link.h2, textMain: link.textMain, price: link.price, textUp: link.textUp, title: link.title,  layout: link.layout, h1: link.h1, description: link.description});
    });
  });
  
  // links.forEach(function(link) {
  //   router.get('/volgograd/' + link.url, function(req, res, next) {
  //   //   console.log("trying to open " + link.url);
  //     res.render(link.page, { title: link.title,  layout: link.layout, h1: link.h1, description: link.description});
  //   });
  // });

  // linksVolgograd.forEach(function(link1) {
  //   router.get(link1.url, function(req, res, next) {
  //   //   console.log("trying to open " + link.url);
  //     res.render(link1.page, { title: link1.title,  layout: link1.layout, h1: link1.h1, description: link1.description});
  //   });
  // });

  export default router;