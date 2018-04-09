const userRouter = require('express').Router();
const user = require('../models').User;
const path = require('path');


//** This will handle any routes going to localhost:3000/api/users

//ALL USERS 

const allUsers = (req,res)=>{
	user.findAll()
		.then((data)=>{
			res.send(data);
		})
		.catch((error)=>{
			res.sendStatus(500);
		})
}


//CREATE NEW USER 

const newUser = (req,res)=>{
	//
}


userRouter.route('/')
	.get(allUsers)


module.exports = userRouter;

//