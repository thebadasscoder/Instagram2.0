var express = require('express');
var app = express()
var router = express.Router();
var path = require('path');

//THIS IS WHERE THE ROUTES WILL GO TO

app.use('/api', router);


//ROUTES 
router.get('/users', (req,res)=>{
	res.sendFile(path.join(__dirname, './user-router'));
});

router.get('/posts', ((req,res)=>{
	res.sendFile(path.join(__dirname, './post-router'));
}));

module.exports = router;