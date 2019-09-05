import { Component } from '@angular/core'


@Component({
    selector:'app-binding',
    templateUrl:'binding.component.html'
    // template:`
    // <h2 class="text-center"> Welcome to binding session</h2>
    // <app-invoice></app-invoice>`
    // // styleUrls:''
    
})
export class BindingComponent{
    title:String;
    
    constructor(){
        this.title = "SYSTEM binding information"
    }

    items:any=[
        {name: 'MI'},
        {name: 'YI'},
        {name: 'MACI'},
        {name: 'CII'},
        {name: 'FURR'},

    ];

    public  clickedItem:any = {name: ' '}; // property/field  
    
    // method - event handlers - functions
    clicked:boolean = false;
     onItemClicked(item: any) {
        this.clickedItem = item;
        this.clicked = true;
     }     
}