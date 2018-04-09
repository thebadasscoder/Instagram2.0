const postRouter = require('express').Router();
const post = require('../models').Post;
const path = require('path');


//This will handle any routes going to localhost:8080/api/posts/* 


// ALL POSTS  
const allPosts = (req,res)=>{
	post.findAll()
	.then((data)=>{
		console.log(data, 'Here are all of your posts!')
		res.send(data);
	})
	.catch((error)=>{
		res.sendStatus(500);
	})
}

//CREATE POSTS 
const newPosts = (req,res)=>{
	post.create(req.body)
	.then((data)=>{
		console.log(data, 'Your have created a new post!')
		res.send(data);
	})
	.catch((error)=>{
		res.sendStatus(500);
	})
}


//EDIT POSTS 

const editPosts = (req,res)=>{
	post.findById(req.params.id)
	.then((data)=>{
		console.log(data, 'Your post has been edited!')
		res.send(data);
	})
	.catch((error)=>{
		res.sendStatus(500);
	})
}




//DELETE POSTS 
const deletePosts = (req,res)=>{
	post.destroy(req.params.id)
	.then((data)=>{
		console.log('You have deleted your post')
		res.send(200);
	})
	.catch((error)=>{
		res.send(500);
	})
}




postRouter.route('/')
	.get(allPosts)
	.post(newPosts)

postRouter.route('/:id')
	.get(editPosts)


module.exports = postRouter;

