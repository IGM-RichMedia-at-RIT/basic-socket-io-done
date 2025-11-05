// Nothing new in router.js. See old examples.

const controllers = require('./controllers');

const router = (app) => {
  app.get('/', controllers.index);
  app.get('/*wild', controllers.notFound);
};

module.exports = router;
