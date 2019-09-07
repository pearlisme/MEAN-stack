import {Component} from '@angular/core'
@Component({
    template:`
       <br/>
      <h1 class="bg-dark text-warning text-center">
      {{title}}</h1>
      <br/>
      <h4 class="text-center text-danger">
      A project created with MongoDB,Express,Angular and Node
       </h4>
      <br/>
      <h5 class="text-dark text-center">
       mail : system@gmail.com
       </h5>  
    `
})
export class HomeComponent{
    title="Welcome to MEAN Stack Project"
}