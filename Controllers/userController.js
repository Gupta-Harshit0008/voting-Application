const user=require('../Models/userModels')

exports.getAllUsers= async (req,res)=>{
    try{
        const userData=await user.find()
        if(userData.length>0){
            res.status(200).json({
                length:userData.length,
                status:'success',
                message:'Users fetched successfully',
                userData
            })
        }
        else{
            res.status(404).json({
                status:'failure',
                message:'no userdata found',
            })
        }
    }
    catch(err){
        res.status(404).json({
            status:'failure',
            message:'no userdata found',
        })
    }
    
}

exports.addNewUser= async(req,res)=>{
    try{
        const userData=await user.create({
            name:req.body.name,
            email:req.body.email,
            uniqueId:req.body.uniqueId,
            password:req.body.password
        })
        // if(userData){
            res.status(200).json({
                status:'success',
                message:'user Added successfully',
                userData
            })
        // }
        
    }
    catch(err){
        res.status(400).json({
            status:'failure',
            message:err.message,
            
        })
    }
}

exports.updateUserDetails= (req,res)=>{
    console.log(req.params.id)
    res.status(200).json({
        status:'success',
        message:'testing updating data for a user API testing'
    })
}