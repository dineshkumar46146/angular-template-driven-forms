import { Component, OnInit } from '@angular/core';
import {User, Address, Phone } from './user.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  user = new User;
  ngOnInit():void{
    this.userInit();
  }
  userInit():void{  
    this.user.firstName = 'FirstName';
    this.user.lastName = 'LastName';
    // this.user.dob = Date;
    this.user.address = new Address();
    this.user.phone = new Array<Phone>();
this.addPhone(2)
  }
  addPhone(min:number):void{
for(let i =0; i<min; i++)
this.user.phone.push(new Phone());
  }
  remove(index:number):void{
    this.user.phone.splice(index,1);
  }
}
