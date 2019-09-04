var express = require('express')
var myApp = express();

myApp.get('/',function handleRoot(req,res,next){
    res.send('Hello world!');
})

myApp.listen(3000);