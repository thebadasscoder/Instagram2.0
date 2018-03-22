const router = require('express').Router();

router.use('/users', require('./user-router'));
router.use('/posts', require('./post-router'));

module.exports = router;