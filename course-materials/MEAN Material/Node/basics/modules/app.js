const stuff= require('./container')
stuff.greet("welcome to Bank of America")
console.log(stuff.sum(10,20))
console.log(stuff.PI)

const con=new stuff.DBCon('http://localhost:master')
con.connect();


//working with Closure
//console.log(stuff.Utility().Square(10));