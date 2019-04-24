var mongoose=require ('mongoose');

var Todo=mongoose.model('Todo',{
    text:{
        type:String
    },
    completed:{
        type:Boolean,
        required:false
    },
    completedAt:{
        type:Number,
        required:false
    }
});

module.exports={Todo:Todo};