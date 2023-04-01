const router = require('express').Router();
const webRoutes = require('./WebRoutes');
const apiRoutes = require('./api');

router.use('/', webRoutes);
router.use('/api', apiRoutes);

module.exports = router;
