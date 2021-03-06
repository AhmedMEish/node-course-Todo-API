var mongoose=require('./db/mongoose');
var {Todo}=require('./models/Todo');
var User=require('./models/User')
var express=require('express');
var bodyParser=require('body-parser');

var app=express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo=new Todo({
        text:req.body.text
    });
    todo.save().then((docs)=>{
    res.send(docs)
},(err)=>{
    res.status(400).send(err) 
});
});
app.listen(3000,()=>{
    console.log('you connected to Server On Port 3000')
})
