'use strict'

const Profile = require('../models').Profile;

let profileArr = [


{
    follows: 20,
    followers: 50,
    image: 'https://s-media-cache-ak0.pinimg.com/originals/20/97/6c/20976c5b131a6c2d503aa4a7ec0fd3a0.jpg',
    likes: 20
  },


{
    follows: 60,
    followers: 150,
    image: 'https://s-media-cache-ak0.pinimg.com/originals/20/97/6c/20976c5b131a6c2d503aa4a7ec0fd3a0.jpg',
    likes: 80

  },


];

const profileSeed = ()=>{
	//Passing the array through and updating multiple instances at a time
	Profile.bulkCreate(profileArr);
}

module.exports = profileSeed;