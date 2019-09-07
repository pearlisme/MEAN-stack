const express = require('express');
const  app = express();

// This responds with "Hello World" on the homepage
//localhost:8080/
app.get('/', (req, res) =>{
    console.log("Got a GET request for the homepage");
    res.json({'status':'Welcome to RESTful world'})
})

// localhost:8080/api/greet
app.get('/api/greet',  (req, res) =>{
    console.log("Got a Greet GET request from client");   
    res.json({'msg':'welcome to Node RESTful world'})
})


// This responds a POST request for the homepage
app.post('/api/create',  (req, res)=> {
    console.log("Got a POST request for the homepage");
    res.json({'status':'Posted new user data to server'})
})

// This responds a DELETE request for the /deluser page.
app.delete('/api/deluser', function (req, res) {
    console.log("Got a DELETE request for /del_user");
    res.json({'status':'deleted data from server'})
})

// This responds a GET request for the /listuser page.
app.get('/api/listusers', function (req, res) {
    console.log("Got a GET request for /list_user");
    res.json({users:['Sriram','Rama','Kavitha']})
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/api/ab*cd', function (req, res) {
    console.log("Got a GET request for /ab*cd");
    res.send('Page Pattern Match');
})


app.listen(8080, () =>{
    console.log("Express server running at 8080");
})

// nodemon  restserver.js

npm i express --save