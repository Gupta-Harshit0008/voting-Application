const express=require('express')
const candidateController=require('../Controllers/candidateController')
const authController=require('../Controllers/authController')

const candidateRoute=express.Router();
candidateRoute.route('/').get(authController.isAdminLoggedIn,candidateController.getAllCandidates).post(authController.isAdminLoggedIn,candidateController.newCandidate)
candidateRoute.route('/:id').put(authController.isAdminLoggedIn,candidateController.updateCandidate).delete(authController.isAdminLoggedIn,candidateController.deleteCandidate)

module.exports=candidateRoute