const user=require('../Models/userModels')

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
   if(userData && password === userData.password){
    res.status(200).json({
        status:'success',
        userData
    })}
   else{
    res.status(401).json({
        status:'unauthorized',
        message:'Please enter correct email and password'
    })
   }

}

exports.isAdminLoggedIn=async (req,res,next)=>{
    let email=req.body.email
    let password=req.body.password
    const userData=await user.findOne({email})
   if(!email || !password ){
        res.status(400).json({
            status:'failure',
            message:'Please enter your email or password'
        })
   }
   if(!userData && (password !== userData.password)){
res.status(401).json({
    status:'unauthorized',
    message:'Please enter correct email and password'
})
   }
   if(!userData.isAdmin){
    res.status(401).json({
        status:'unauthorized',
        message:'You are not authorized'
    })
    return false;
}
// return true;
next();
}
