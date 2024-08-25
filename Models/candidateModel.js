const { count } = require('console');
const mongoose=require('mongoose')
const { type } = require('os')

const candidateSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    party:{
        type:String,
        required:true
    },
    Votes:[
        {
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref: 'users',
                required:true
            },
            votedAt:{
                type:Date,
                default:Date.now()
            }
        }
    ],
    voteCount:{
        type:Number,
        default:0
    }
})

const Candidate=mongoose.model('Candidate',candidateSchema)

module.exports=Candidate;