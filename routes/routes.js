var expressVue = require('express-vue');
const path = require('path');
const flash = require('express-flash');
const errorHandler = require('errorhandler');
const cors = require('cors');
const moment = require('moment');
/**
 * Controllers (route handlers).
 */

const dataController = require('../controllers/data');

module.exports = function (app) {

  //Home route
  app.get('/', function (req, res) {
    res.send('Home');
  });

  /**
   * API Routes.
   */

  app.get('/api/departure', function (req, res) {
    return dataController.get(req, res);
  });

  /**
   * Error Handler.
   */
  app.use(errorHandler());
}
