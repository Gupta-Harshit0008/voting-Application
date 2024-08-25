const app= require('./app')
const dotenv=require('dotenv')
const mongoose=require('mongoose')


dotenv.config({path:'./config.env'})

const DB=process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD)

mongoose.connect(DB).then(()=>{
    console.log('Database Connection Successfull ..!!')
})

const Port = 4000 || process.env.PORT 
app.listen(Port,()=>{
    console.log(`server is started at ${Port}...`)
})
