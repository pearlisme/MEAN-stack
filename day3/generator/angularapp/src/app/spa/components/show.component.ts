import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'show',
  template: `<h1 class="bg-info">
                 You have selected  {{name}}
             </h1>
             
             `,
  styles: ['.mycolor {background: cyan}']
})
export class ShowComponent{
  name: string;

  constructor(private route: ActivatedRoute) {
   this.name = route.snapshot.params['selected'];
   console.log(this.name)
   

   //{path:'show/:selected',component:ShowComponent},
  }
}