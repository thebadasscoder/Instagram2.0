
const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

//THIS IS WHERE THE ROUTES WILL GO 
app.use('/api', router);

//ROUTES 
router.use('/users', require('./user-router'))
router.use('/posts', require('./post-router'))

module.exports = router;