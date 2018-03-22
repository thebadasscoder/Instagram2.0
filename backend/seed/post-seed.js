'use strict'

const Post = require('../models').Post;

let postArr = [
{
    url: 'https://s-media-cache-ak0.pinimg.com/originals/20/97/6c/20976c5b131a6c2d503aa4a7ec0fd3a0.jpg',
    caption: 'Love Love Love It!'
  },


{
    url: 'https://s-media-cache-ak0.pinimg.com/originals/20/97/6c/20976c5b131a6c2d503aa4a7ec0fd3a0.jpg',
    caption: 'When you are this adorable!'
  },


];

const postSeed = ()=>{
	//Passing the array through and updating multiple instances at a time
	Post.bulkCreate(postArr);
}

module.exports = postSeed;