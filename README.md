# MEAN-stack


Event loop

1. interactive shell
2. App development


To check node version
node --version  -- to check version

To start the node interactive shell 
node 

> console.log("Welcome to node");

(REPL MODE) R- read E - evalute P- process L- loop

var x = 5
x+= 5


15
> function sum(x,y){
... return x+y;
... }
undefined
> console.log(sum(10,20));


NPM -node package manager

npm --version

# To create package.json
npm init

#Unit Test
Mocha for node unit test
jasmine for Angular unit test

# To save the package
>npm install bootstrap --save
# To save in dev
>npm install bootstrap --save-dev
# To save global
>npm install bootstrap -g

# use
export will available to outside

#based on ES specification
var | let | const

var - ES 5 
let - block scope 
const - not allowed to redefined

Within the function Let and outside the function Const

# module is reusable code
# module types
1. Bultin - net, http, js, cluster
2. Custom - DAL, BAL
3. TPM    - bootstrap


create the event
emit the event
subcribe the event


//let == block scope == const


1. Declarative funciton
2. Anonymous function
3. Instance function


1: function add()

2: var sum= function (x,y){ }    === (x,y) => {}


I/O

1. filesystem
2. database
3. sockets

# 2 built in modules
1. Globals
2. Process