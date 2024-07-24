import express from 'express';
// import * as ctrl from "../controllers/v1";

const baseRouters = express.Router();

baseRouters.get('/reviews', (req, res) => {
  res.send('reviews page');
});

baseRouters.post('/reviews', (req, res) => {
  res.send('post reviews');
});

baseRouters.post('/feedback', (req, res) => {
  res.send('post feedback');
});

baseRouters.get('/templates', (req, res) => {
  res.send('templates page');
});

baseRouters.post('/order-design', (req, res) => {
  res.send('send order data');
});

export default baseRouters;
