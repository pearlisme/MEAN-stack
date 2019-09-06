import {Component} from '@angular/core';

import {ContactService} from '../services/contact.service';

import { Router} from '@angular/router';
import { Contact } from './contact';

@Component({
  templateUrl: './templates/newcontact.component.html' ,
  providers:[ContactService],
  styles:[
    `
    	label{ display:inline-block;width:100px}
    	input{width:200px}
    `
    ]
})
export class NewContactComponent{

constructor(
      private  _contactService:ContactService,
      private _router: Router){      
      }

onInsert(cname:string,mail:string,ph:string){
  let newcontact:Contact={name:cname,email:mail,phone:ph}

  this._contactService.insertContact(newcontact);
  this._router.navigate(["contacts"]);
   }
}



