# MEAN-stack

#Day1:

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


#Day 2:

#Websockets
npm init -y

npm install websocket --save

node --expermimental-modules server.mjs

#express

npm init -y

npm install express --save

npm install -g express-generator

// To create a project
express myapp

// To install everything in package.json
npm install

#EJS

isomorphic 

npm install body-parser --save

npm install cors --save

#MongoDb

creating connetion to mongodb

npm init -y
npm install mongodb --save

#Mongoose

npm install mongoose --save


#Angular

npm install -g @angular/cli

ng add @angular/material

properties:

{{}} : Angular expression - interpolation
[] : Property binding
() : Event binding
[(ngModel)] : Two way binding
*ngFor, *ngIf, *ngSwitch : structured directives
#variable : defining variable
let : to define variable (Eg: *ngFor = "Let ite in items")


ng generate g component c invoice 


#Debugging

https://augury.rangle.io/

#Day4:

viewContainerRef ==> viewRef object ==> viewState object

view will have state -->  available to that particular component --> viewstate object


#Life cycle of angular

constructor --> initialization --> injection at once
ngOnChanges --> binding state change
ngOnInit    --> added to shadow DOM --> fired only once (initial calls)
ngDoCheck   --> after state changes asks us to rerender the changes
        ngAfterContentInit
    ngAfterContentChecked
        ngAfterViewInit
    ngAfterViewChecked  --> real DOM tree updates --> can able to utlize Jquery with this level
ngOnDestroy  --> removing component from shadow DOM --> routing is the best place to call destroy --> viewCOntainerRef.remove(reference)


best place to inject service is contructor




#ng g gaurd intercept


# RESTAPI

Express install

npm install

npm install body-parser@1.16 --save

npm install cors@2.8.4 --save

npm install ejs@2.5.5 --save

npm install method-override@2.3.7 --save

npm install mongoose@4.8.3 --save

npm install node-restful@0.2.6 --save




# UI-APP

ng new ui-app

ng serve --port:3000

ng g application app-name
ng g library lib-name

# Deployement steps

1. Change the environment in main.ts to environment.prod.ts
   (Production build)
2. Open tsconfig.json and set sourceMap: false
3. Remove console.log in entire project
4. In angular.json set following options:

- "optimization": true
- "outputHashing": "all"
- "sourceMap": false
- "extractCss": true
- "namedChunks": false
- "aot": true  --> tree shaking --> unreachable component/code
- "vendorChunk": false
- "buildOptimizer": true
- "budgets": [
                  {
                    "type": "initial",
                    "maximumWarning": "2mb",
                    "maximumError": "5mb"
                  }

 ng build
 ng build --prod

Trainer Details:

dsrmurthy786@yahoo.com/98480 11641

--------------------
MEAN STACK Material:
https://bit.ly/2lAFzhq
--------------------
Angular 8 material: 
https://bit.ly/2MASWds
-------------------------
Node and Mongodb material:
https://bit.ly/2nzShsH
		
		

		