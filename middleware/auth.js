const jwt=require('jsonwebtoken');
module.exports=(req,res,next)=>{
   const token= req.body.token;
   console.log(token);
    try{
        const token=req.body.token.split("")[1];
        const jwttoken=jwt.verify(token,'thisismysecrect')
        next();
    }
    catch(error){
        res.status(401).json({
            error:"Invalid Token"
        })
    }
}