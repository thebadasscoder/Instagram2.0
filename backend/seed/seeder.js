const postSeed = require('./post-seed');
const userSeed = require('./user-seed');

var db = require('../models');

db.sequelize.sync({force: true})
.then(()=>{
	postSeed();
})
.then(()=>{
	userSeed();
})