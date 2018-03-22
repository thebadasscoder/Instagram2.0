'use strict'

const User = require('../models').User;

let userArr = [


{
    email_address: 'jaydensmith@gmail.com',
    password: 'lovemusicx3',
    username: 'jdsmith'
  },


{
    email_address: 'lovethyself@yahoo.com',
    password:'livelearngrow',
    username:'lovethyselfguru'

  },


];

const userSeed = ()=>{
	//Passing the array through and updating multiple instances at a time
	User.bulkCreate(userArr);
}

module.exports = userSeed