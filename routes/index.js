const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

module.exports = () => {

  router.get('/', indexController.WelcomeToPage);

  router.get('/firma', indexController.toSignature);

  router.post('/firma', indexController.CreateSignature);

  return router;
}