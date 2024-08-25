const user=require('../Models/userModels')
const candidate = require('../Models/candidateModel')

exports.getAllVotesData=async (req,res)=>{
    try{
        const VotesData= await candidate.find().sort({voteCount:'desc'});
        const record= VotesData.map((data)=>{
            return {
                party:data.party,
                count:data.voteCount
            }
        })
        if(!VotesData){
            res.status(404).json({
                status:'failure',
                message:'No Data found',
            })
        }
        res.status(200).json({
            status:'success',
            message:'Data fetched Successfully',
            record
        })
        
    }
catch(err){
    
}
}

exports.givingVote=async (req,res)=>{
    const candidateID=req.params.id
    const userid=req.headers.useremail
try{
    const CandidateData= await candidate.findById(candidateID)
    if(!CandidateData){
        res.status(404).json({
            status:'failure',
            message:'No candidate found'
        })
    }
    
    const userData= await user.findOne({email:userid})
    if(!userData){
        res.status(404).json({
            status:'failure',
            message:'No candidate found'
        })
    }
    if(userData.isAdmin){
        res.status(403).json({
            status:'unauthorized',
            message:'not eligible to vote'
        })
    }
    if(userData.voted){
        res.status(400).json({
            status:'unauthorized',
            message:'you have already voted.. '
        })
    }

   CandidateData.Votes.push({user:userData._id})
   CandidateData.voteCount++;
    const voteCandidateData = await candidate.findByIdAndUpdate(candidateID,CandidateData)

   userData.voted=true;
   const voteUserData = await user.findByIdAndUpdate(userData._id,userData)

   res.status(200).json({
    message:'Vote recorded successfully'
   })
}
    
catch(err){
    res.status(400).json({
        message:'Vote was not saved successfully..'
       })
}

    
    
}