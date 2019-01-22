const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

var app = express();
var PORT = 3000;


const api = require('./routes/apis');

app.use(bodyParser.json());
app.use(cors());
app.use('/api',api)

app.get('/',function(req,res){
    console.log('server is working is fine')
    res.json("server works")
})


app.listen(PORT,function(){
    console.log('server is running on this '+PORT)
})