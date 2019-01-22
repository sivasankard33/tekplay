const mongoose = require('mongoose');
const express = require('express');
const bodyParser =require('body-parser');
const jwt = require('jsonwebtoken')
const cors =require('cors');


var app =express();
var PORT =4000;
app.use(bodyParser.json());
app.use(cors());


const db = "mongodb://sivasankar:pwdsiva9@ds123224.mlab.com:23224/sankardb";

mongoose.connect(db,err=>{
    if(err){
        console.log(err)
    }else{
        console.log('mongoose is connected')
    }
})
const Schema = mongoose.Schema

const usercomplaint = new Schema({
    heading :String,
    complaint:String,
    date:String,
    status:String
})


const user = mongoose.model('user',usercomplaint,'usercomplaints');

function virefyToken(req,res,next){
    if(!req.headers.Authorization){
        res.status(401).send('unauthorized requeste')
    }
    let token = req.headers.authorization.split(' ')[1]
   if(token === 'null'){
       res.status(401).send('unauthorized request')
   }
   let payload = jwt.verify(token,'secritkey')
   if(!payload){
       res.status(401).send('unauthorized request')
   }
   req.userId = payload.subject
   next()
}



app.get('/api',function(req,res){
    console.log('server is working is fine')
    res.json("server works")
})

app.post('/api/complaint',function(req,res){
    var userdata=req.body
    var data =new user(userdata);
   
       data.save(function(err,data){
           if(err){
               console.log(err)
               throw err;
           }else{
            //    res.status(200).send(res);
            res.json(data);
            
           }

       })

})


app.get('/api/usercomplaits',function(req,res){
    user.find({},function(err,userdata){
        if(err){
            throw err;
            console.log(err)
        }else{
            res.status(200).send(userdata);
            // let payload ={subject:userdata._id}
            // let token =jwt.sign(payload,'secretekey')
            //  res.status(200).send({token});
        }
    })
})


app.listen(PORT,function(){
    console.log('server is running on loaclhost'+ PORT)
})


