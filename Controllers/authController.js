const user=require('../Models/userModels')
const signToken=require('../utils/jwtToken')

exports.login=async (req,res)=>{
    let email=req.body.email
    let password=req.body.password
    const userData=await user.findOne({email})
   if(!email || !password ){
        res.status(400).json({
            status:'failure',
            message:'Please enter your email or password'
        })
   }
   if(userData && (userData.password === password )){
    const token=signToken(userData._id)
res.status(200).json({
    status:'success',
    user:{
        name:userData.name,
        email:userData.email,
        isAdmin:userData.isAdmin,
        userVoted:userData.voted
    },
    token
})
}
else{
    res.status(401).json({
        status:'unauthorized',
        message:'Please enter correct email and password'
    })
}

}

exports.isAdminLoggedIn=async (req,res,next)=>{
    let email=req.headers.useremail
    const userData=await user.findOne({email})
   if(!userData.isAdmin){
    res.status(401).json({
        status:'unauthorized',
        message:'You are not authorized'
    })
    return false;
}
next();
}
