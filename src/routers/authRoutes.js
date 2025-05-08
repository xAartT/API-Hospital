const express = require('express');
const authController = require('../controllers/authController');

module.exports = (app) => {
  const router = express.Router();
  router.post('/login', authController.login);
  app.use('/', router);
};
