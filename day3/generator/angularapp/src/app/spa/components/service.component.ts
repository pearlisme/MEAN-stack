import {Component, ViewEncapsulation} from '@angular/core';
@Component({
  template: `<h2 class="bg-info">
  We offer Corporate Training services</h2>
   <h3 class="well text-danger">Technologies</h3>
   <ul>
      <li>Dotnet Core</li>
      <li>Angular js and Angular 2.0/4.0</li>
      <li>Node JS </li>
   </ul>

  `,
  styles: ['.mycolor {background: cyan}'],
  encapsulation:ViewEncapsulation.Emulated 
})
//ViewEncapsulation in Angular 6:
/*
 Emulated - use global not share me
 Native - No global No sharing
 None - global
 Shadow DOM  - Use Shadow DOM to encapsulate styles.
 */

export class ServiceComponent{  
}