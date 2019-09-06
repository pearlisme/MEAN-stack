import {Component,OnInit} from '@angular/core';

//load services



import {Session} from '../services/globals';
import { ContactService } from '../services/user.service';
import { Contact } from './contact';

@Component({
    providers:[ContactService],
    templateUrl: './templates/contactlist.component.html' 
})
export class ContactListComponent implements OnInit{
  authenticated:boolean;
  name:string | null;  
  public contacts:Contact[];
  public selected:any={};
  public showDetails:boolean=false;
  
  constructor(
      private _contactService:ContactService  ){ }
  
 ngOnInit(){
     this.name=Session.username;   
     this.authenticated=Session.authenticated;
     
     this._contactService.getContacts()
        .then( (cnts:any) => this.contacts=cnts)
   }
 
  selectedContact(contact:Contact){
  	this.selected=contact.name;    
  	this.showDetails=true;    
  }
}