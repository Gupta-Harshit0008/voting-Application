const express= require('express');
const morgan=require('morgan')
const userRouter = require('./Routes/userRoutes');
const candidateRouter=require('./Routes/candidateRotues')
const votesRouter=require('./Routes/votesRouter')
const app= express();
app.use(express.json());

//Middlewares
app.use(morgan('dev'))


// routes

app.use('/api/v1/users',userRouter)
app.use('/api/v1/candidates',candidateRouter)
app.use('/api/v1/votes',votesRouter)

// server

module.exports=app;