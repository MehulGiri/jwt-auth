const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String
    },
    confirm_password:{
        type:String
    }
})

module.exports=mongoose.model('signup',userSchema);