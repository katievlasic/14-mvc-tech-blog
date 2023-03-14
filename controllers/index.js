const router = require('express').Router();

const webRoutes = require('./web-routes.js');

router.use('/', webRoutes);

module.exports = router;
