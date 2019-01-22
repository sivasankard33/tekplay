const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../models/users');
// const complint =require('../models/complant');

const db = "mongodb://sivasankar:pwdsiva9@ds123224.mlab.com:23224/sankardb";

mongoose.connect(db,err=>{
    if(err){
        console.log("mongoose is not connected" +err);
    }else{
        console.log("mongoose is connected successfully")
    }
})

function viryfication(req,res,next){
    if(!req.headers.authorization){
        res.status(401).send('unauthorized requeste')
    }
    let token = req.headers.authorization.splite(' ')[1]
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



router.get('/',function(req,res){
    console.log("hellow from siva")
    res.send('api get router')
})

router.post('/register',function(req,res){
    var userdata = req.body
    var user =new User(userdata)

    user.save(function(err,registereduser){
        if(err){
            res.send(err)
            throw err;
        }else{
            let payload ={subject:registereduser._id}
             let token =jwt.sign(payload,'secretekey')
            res.status(200).send({token});
        }
    })
})


router.post('/login',function(req,res){
    var userdata = req.body

    User.findOne({email:userdata.email},(err,user)=>{
        if(err){
            console.log("invalid user"+err)
        }else{
            if(!user){
                res.status(401).send('Invalid email');
            }else{
                if(user.password !==userdata.password){
                    res.status(401).send('Invalid Password');
                }else{
                    let payload ={subject:user._id}
                    let token =jwt.sign(payload,'secretekey')
                    res.status(200).send({token})
                }
            }
        }

    })

})



module.exports =router;