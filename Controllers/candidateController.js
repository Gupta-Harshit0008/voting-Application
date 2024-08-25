const candidate = require('../Models/candidateModel')

exports.getAllCandidates= async(req,res)=>{
    try{
        const allUsers=await candidate.find()
         res.status(200).json({
            status:'success',
            message:'candidates fetched successfuuly',
            allUsers
         })
    }
    catch(err){
        res.status(404).json({
            status:'failure',
            message:'no user found' 
         })
    }
}
exports.newCandidate=async (req,res)=>{
    try{
        const newcandidate= await candidate.create({
            name:req.body.name,
            party:req.body.party
        })
    
        if(!newcandidate){
            res.status(400).json({
                status:'failure',
                message:'Please enter details corrcetly'
            })
        }
        res.status(200).json({
            status:'success',
            message:'User added successfully'
        })
    }
    catch(err){
        res.status(400).json({
            status:'failure',
            message:err.message
        })
    }
    
}


//ToDo update candidate
exports.updateCandidate=(req,res)=>{
    console.log(req.params.id)
    res.status(200).json({
        status:'success',
        message:'Testing API for updating a candidate...'
    })
}
// TODO delete candidate
exports.deleteCandidate=(req,res)=>{
    console.log(req.params.id)
    res.status(200).json({
        status:'success',
        message:'Testing API for delete  a candidate...'
    })
}