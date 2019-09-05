// import { Component, OnInit, Input } from '@angular/core';

// @Component({
//   selector: 'app-order',
//   templateUrl: './order.component.html',
//   styleUrls: ['./order.component.css']
// })

import {Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'order-processor',    
    template: `
    <h2 class="bg-primary" >Stock Information</h2>
    <h2 class="text-danger container">
        Buying {{quantity}} shares of {{stockSymbol}}
    </h2>
    Company : <input type="text" [(ngModel)]="stockSymbol"/>
     
    <sms-text [stock]="stockSymbol"></sms-text>
  `
})
export class OrderComponent implements OnInit {

  @Input()
  quantity:number;

  @Input()
  stockSymbol:string;
  constructor() { }

  ngOnInit() {
  }

}
