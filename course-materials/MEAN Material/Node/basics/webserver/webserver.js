const express=require('express')
const server=express()
server.get('/',(request,response)=>{
  response.send("<h1 >Welcome to Express</h1>")
})


server.listen(3000)
console.log("server running to localhost:3000")

//Debugging
/*
Click Debug icon on control panel section (left side)
click Add Configuratioin in Debug dropdown list
which will crete launch.json

set program to below code:
         "program": "${workspaceFolder}\\webserver.js"

Put break points wherver required.

Now click Run icon in debugger 
Open browser, type localhost:3000

and observe breakpoint mode in vs code as it
has attached node inspector. Switch back to VS code.
observe variables, watch  call stack etc.

Now step into or step out....
*/