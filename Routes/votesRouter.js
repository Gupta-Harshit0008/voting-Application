const express=require('express')
const votesController=require('../Controllers/votesController')


const votesRouter=express.Router();
votesRouter.route('/').get(votesController.getAllVotesData)
votesRouter.route('/:id').post(votesController.givingVote)

module.exports=votesRouter