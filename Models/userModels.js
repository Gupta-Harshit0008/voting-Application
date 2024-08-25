const mongoose =require('mongoose')

const userSchema=new mongoose.Schema({
    name:{
      type:String,
      required:[true,'A User must have a name']
    },
    email:{
      type:String,
      required:[true,'A User must have a email '],
      unique:true
    },
    uniqueId:{
      type:Number,
      required:[true,' A user must have a valid ID'],
      unique:true
    },
    password:{
      type:String,
      required:[true,'A user must enter a password'],
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
    voted:{
        type:Boolean,
        default:false
    }
  })
  
  const User=mongoose.model('User',userSchema)

  module.exports=User