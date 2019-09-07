const http=require('http')
const PI=3.142;
const log=(msg)=>{
    // log the message in Mongodb
    console.log(`Logger :${msg}`)
}
const greet=(msg)=>{
    log(msg)
    return "Hi!"+ msg;
}
const add=(x,y)=>{
    log("add invoked")
    return `x+y = ${x+y}`;
}
//instance function
function DBUtil(constr){
    this.constr=constr;
    this.connect= ()=>{
        console.log(`Connected to database with ${this.constr}`)
    }
 }
module.exports={
    greet:greet,
    sum:add,
    PI:PI,  
    DBCon:DBUtil
  }
//-----------------------------------------------



//closure like lodash library
const Util=((args)=>{
    let Square=(x)=>{
        Log(`${x} is passed to square`);
        return  x*x;
    }
    let Log=(msg)=>{
        console.log(msg)
    }
    return {
        Square:Square,
       }
})
/*
module.exports={
    greet:greet,
    add:add,
    PI:PI,
    DBCon:DBUtil,
    Utility:Util
}
*/