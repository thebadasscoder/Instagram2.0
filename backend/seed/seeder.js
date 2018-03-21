const profileSeed = require('./profile-seed');
const userSeed = require('./user-seed');

var db = require('../models');

db.sequelize.sync({force: true})
.then(()=>{
	profileSeed();
})
.then(()=>{
	userSeed();
})