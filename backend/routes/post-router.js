const profileRouter = require('express').Router();
const profile = require('../models').Profile;
const formidable = require('formidable');
const path = require('path');


// //This will handle any routes going to localhost:3000/api/profile/* 


// // //ALL PROFILES 
// const userProfiles = (req,res)=>{
// 	profile.findAll()
// 	.then((data)=>{
// 		res.send('this is it ===>',data);
// 	})
// 	.catch((error)=>{
// 		res.sendStatus(500);
// 	})
// }


// //SINGLE PROFILE BY ID 

// const singleProfile = (req,res)=>{
// 	profile.findById(req.params.id)
// 	.then((data)=>{
// 		res.send(data)
// 	})
// 	.catch((error)=>{
// 		res.sendStatus(500);
// 	})
// }


// CREATE PROFILE 
