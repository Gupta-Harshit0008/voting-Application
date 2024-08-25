const express= require('express');
const morgan=require('morgan')
const userRouter = require('./Routes/userRoutes');
const candidateRouter=require('./Routes/candidateRotues')

const app= express();
app.use(express.json());

//Middlewares
app.use(morgan('dev'))





// routes

app.use('/api/v1/users',userRouter)
app.use('/api/v1/candidates',candidateRouter)

// server

module.exports=app;