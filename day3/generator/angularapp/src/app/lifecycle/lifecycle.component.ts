
//Component Life Cycle
import { 
  Component,  Input, OnInit,OnChanges,DoCheck,OnDestroy,
  ChangeDetectorRef,SimpleChanges} from '@angular/core';

// Parent component
@Component({
  selector: 'app-lifecycle',
  template: `
    <h1 class="container">Google Search:
        <input type="text" [(ngModel)]="search1">
     </h1>
    <child [search1]="search1"></child>
  `
})
export class CompLifeCycleComponent {
  search1: string = 'computers';
}

//child component
@Component({
  selector: 'child',
  template: `
  <h1 class='text-danger container' id="txt">Search Text</h1>
  <div class='container'>
   <h3 class='text-primary'>{{search1}}</h3>   
  </div>
    `
})
export class ChildComponent   implements OnInit,OnChanges,DoCheck,OnDestroy { 
  @Input() 
  search1: string;    


  constructor(public cd:ChangeDetectorRef) {
    // only inject Services as Dependencies using DI
        console.log(`constructor: ${this.search1}`);
      //throw new Error("Ooops.......Error has occured in app.. see the log")
     // this.cd.detach();
    
  }   
  
 ngOnInit():void {   
       // fired only once 
      // to subscribe to observable / web sockets
      // create custom event /raise 
     // invoke service method for initial data, 
     // load data from localstorage
    console.log(`ngOnInit: ${this.search1}`);
    // http.get('website.com/api/service/search?data="+ this.search)    
  
    setTimeout(() => {
      this.cd.reattach()
    },5000); 
  
     }
     
  /*Invoked every time an @Input() property changes via the data binding */
  ngOnChanges(changes: SimpleChanges):void {
    // validations,logging
    for (let key in changes) {
      console.log(`${key} changed. 
                         Current: ${changes[key].currentValue}.
                         Previous: ${changes[key].previousValue}`);
             }    
   // invoke service method to handle changes - model validation
    console.log(`ngOnChanges: ${this.search1}`);     
    // ajax call to service to get live data 
    //var searchdata=http.get(url+"?q="+search)  
  }  
  ngDoCheck() {
    // fired every time
    //this.cd.detectChanges()   equivalent to this.cd.reattach()
    // Write custom change detection strategy logic here
    console.log("ngDoCheck- Change detection strategy")
  
    //to re-render even it is detached in constructor 
  /*
    if(this.search.length==10 ){
    // ajax call to server and get data 
   this.cd.detectChanges();  // $spply()  - React- ForceUpdate /     
    }
   //this.cd.checkNoChanges();//safe guard changes
   */
  }  

 ngAfterViewChecked() {
   console.log("h1 tag text: "  +
       document.getElementById("txt").innerText)
   // you can access Real DOM - document.getElementID("div1").append("fjsjfs")
   // Jquery  $("#div1").fadeIn()
   //Called after every check of the component's view. Applies to components only.
   //Add 'implements AfterViewChecked' to the class.
   }
  ngOnDestroy() {
    // Remove the component state here, unsubscribe observer,log
    console.log("Component Destroyed");
  }
}//end
