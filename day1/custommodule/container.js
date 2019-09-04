var greet=function(msg){
return "Hi! "+msg;
}

var add = function(x,y){

    return `x+y = ${x+y}`;
}

const PI = 3.142

// module.exports = greet;

module.exports={
    greet:greet,
    add:add,
    PI:PI
}