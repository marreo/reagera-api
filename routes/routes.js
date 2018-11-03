var expressVue = require('express-vue');
const path = require('path');
const flash = require('express-flash');
const errorHandler = require('errorhandler');
const cors = require('cors');
const moment = require('moment');
/**
 * Controllers (route handlers).
 */

const friendController = require('../controllers/friend');
const userController = require('../controllers/user');

module.exports = function (app) {

  //Home route
  app.get('/', function (req, res) {
    res.send('Welcome toZzz the VA API');
  });

  /**
   * Friend Routes.
   */

  app.post('/api/friend', function (req, res) {
    return friendController.get(req, res);
  });

  app.post('/api/friend/create', function (req, res) {
    return friendController.create(req, res);
  });

  app.post('/api/friend/remove', function (req, res) {
    return friendController.remove(req, res);
  });

    /**
   * Friend Routes.
   */

  app.post('/api/user', function (req, res) {
    return userController.create(req, res);
  });
  app.get('/api/user', function (req, res) {
    return userController.get(req, res);
  });

  /**
   * Error Handler.
   */
  app.use(errorHandler());
}
