const events = require('events');

//let == block scope == const
//level 1: simple event
//create event object
let myEmitter = new events.EventEmitter();

myEmitter.on('greet',(msg)=>{
    console.log(msg)
})

myEmitter.emit('greet','Welcome to Node world!')