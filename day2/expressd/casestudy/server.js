var express = require('express')
var app = express();

//npm install ejs --save
// embeded javascript
app.set('view engine','ejs');



app.get('/',function(req,res){
    var books = [
        {'name': 'shelly','authored': '100'},
        {'name': 'brain','authored': '60'},
        {'name': 'valluvar','authored': '500'},
        {'name': 'kabilan','authored': '10'}
    ]

    var tagline = 'read more books';

    res.render('pages/index',{
        books:books,
        tagline:tagline
    })
})

app.get('/about',function(req,res){
    res.render('pages/about');

})
app.listen(3000);
console.log("3000 is the  magic port")



















/*const express = require('express')
const app = express();

const hostname = '127.0.0.1';
const port = 3000;

app.use('/',(req,res,next)=>{
    console.log("Request has come to our web server "+req.url);
    next();
})

app.get('/',(req,res)=>{
res.send("Welcome to Express World!")
})


app.get('/contacts',(req,res)=>{
    res.send("I am currently in contact route")
})

app.get('/profile/:id',(req,res)=>{
    res.send("Request for profile id:"+req.params.id+" is receive")
})

app.get('/home',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.get('/api/products',(req,res)=>{
    let products=[
        {'id':'100','name':'Laptop','price':'1300'},
        {'id':'200','name':'Laptop','price':'1300'},
        {'id':'300','name':'Laptop','price':'1300'},
        {'id':'400','name':'Laptop','price':'1300'},
        {'id':'500','name':'Laptop','price':'1300'}
    ]
    res.json(products);
})

app.listen(3000)
console.log(`Server running at http://${hostname}:${port}/`);

*/