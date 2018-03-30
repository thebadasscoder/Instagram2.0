const postRouter = require('express').Router();
const post = require('../models').Post;
const path = require('path');


//This will handle any routes going to localhost:8080/api/posts/* 


// // // //ALL POSTS  
const allPosts = (req,res)=>{
	post.findAll()
	.then((data)=>{
		res.send('this is it ===>',data);
	})
	.catch((error)=>{
		res.sendStatus(500);
	})
}

postRouter.route('/')
	.get(allPosts)


module.exports = postRouter;

