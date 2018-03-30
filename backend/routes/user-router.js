const userRouter = require('express').Router();
const user = require('../models').User;
const path = require('path');


//** This will handle any routes going to localhost:3000/api/users

// Get All Users Here 

const allUsers = (req,res)=>{
	user.findAll()
		.then((data)=>{
			res.send('this is it ===>', data);
		})
		.catch((error)=>{
			res.sendStatus(500);
		})
}



userRouter.route('/')
	.get(allUsers)


module.exports = userRouter;
