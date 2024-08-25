const express=require('express')
const userControllers=require('../Controllers/userController')
const authController=require('../Controllers/authController')

const userRouter= express.Router();
userRouter.route('/').get(userControllers.getAllUsers).post(userControllers.addNewUser)
userRouter.route('/:id').put(userControllers.updateUserDetails)
userRouter.route('/login').post(authController.login)

module.exports=userRouter