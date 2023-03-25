const router = require('express').Router();

const commentRoutes = require('./commentRoutes.js');
const userRoutes = require('./userRoutes.js');

router.use('/comments', commentRoutes);
router.use('/users', userRoutes);

module.exports = router;
