import { Component, OnInit } from '@angular/core';
import { User, Address,Phone  } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    this.UserInit();
  }
  private user : User;
  UserInit(): void
  {
    this.user =new User();
    this.user.firstName = 'FirstName';
    this.user.lastName = 'LastName';
    this.user.email = 'Email';
    this.user.address = new Address();
    this.user.phone = new Array<Phone>()
  }
  
}
