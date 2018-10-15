import { Component, OnInit } from '@angular/core';
import { User, Address, Phone } from './user.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user : User;
  ngOnInit(): void {
    this.userInit();
  }
  userInit(): void {
    const user1 = new User();

    user1.firstName = 'FirstName';
    user1.lastName = 'LastName';
    // user1.dob = Date;
    user1.address = new Address();
    user1.phones = new Array<Phone>();
    //this.addPhone(2);
    this.user = user1;
  }
  addPhone(min: number): void {
    for (let i = 0; i < min; i++)
      this.user.phones.push(new Phone());
  }
  remove(index: number): void {
    this.user.phones.splice(index, 1);
  }
}
