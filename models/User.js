const mongoose=require ('mongoose');

var User=mongoose.model('Users',{
    Name:{
        type:String,
        default:'newUser'
    },
    email:{
        type:String,
        required:true,
        minlength:5,
        tirm:true
    },
});


module.exports={User}