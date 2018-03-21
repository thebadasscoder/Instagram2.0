'use strict'

const User = require('../models').User;

let userArr = [


{
    email: 'jaydensmith@gmail.com',
    password: 'lovemusicx3',
    username: 'jdsmith'
  },


{
    email: 'lovethyself@yahoo.com',
    password:'livelearngrow',
    username:'lovethyselfguru'

  },


];

const userSeed = ()=>{
	//Passing the array through and updating multiple instances at a time
	User.bulkCreate(userArr);
}

module.exports = userSeed