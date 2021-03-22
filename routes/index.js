const express=require('express');
const router=express()
const User=require('../model/user')
const jwt=require('jsonwebtoken')
const authCheck=require('../middleware/auth')

router.post('/signup',async(req,res)=>{
    
    const user=new User({
        email:req.body.email,
        password:req.body.password,
        confirm_password:req.body.confirm_password
    })
        console.log(user);
        user.save((error,user)=>{
            res.status(200).json({
            message:"success"
            })
        })
})

router.post('/login',(req,res)=>{
   
    const {email,password}=req.body;
    
    User.findOne({email:req.body.email,password:req.body.password},function(err,user){
        if(user){
            const token= jwt.sign({_id:user._id},"thisismysecrect",{
                expiresIn:18000
            })
            console.log(token);
            return res.status(200).send({auth:true,token:token})
        }
        else{
            res.status(400).send({
                message:"Invalid User"
            })
        }
    })   
        
})

router.post('/change-password/:id',authCheck,(req,res)=>{

    const mybodydata={
        password:req.body.password   
    }
        // console.log(mybodydata);
    User.findByIdAndUpdate(req.params.id,mybodydata,function(err,db){
        if(db){
            res.status(200).json({
                message:"Password Update"
            })
        }
    })
    

})



module.exports=router;