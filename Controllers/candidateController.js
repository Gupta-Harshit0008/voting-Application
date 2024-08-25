exports.getAllCandidates= async(req,res)=>{
   await res.status(200).json({
       status:'success',
       message:'Testing API for getting list of candidates...' 
    })
}
exports.newCandidate=async (req,res)=>{
    await res.status(200).json({
        status:'success',
        message:'Testing API for adding a new candidate...'
    })
}

exports.updateCandidate=(req,res)=>{
    console.log(req.params.id)
    res.status(200).json({
        status:'success',
        message:'Testing API for updating a candidate...'
    })
}

exports.deleteCandidate=(req,res)=>{
    console.log(req.params.id)
    res.status(200).json({
        status:'success',
        message:'Testing API for delete  a candidate...'
    })
}