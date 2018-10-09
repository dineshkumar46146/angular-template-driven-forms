import { Component, OnInit } from '@angular/core';
import { User, Address, Phone } from './user-template.model';

@Component({
  selector: 'app-user-template',
  templateUrl: './user-template.component.html',
  styleUrls: ['./user-template.component.css']
})
export class UserTemplateComponent implements OnInit {
  private user: User;
  ngOnInit(): void {
    this.initUser();
  }

  initUser(): void {
    this.user = new User();
    this.user.firstName = 'FirstName';
    this.user.lastName = 'LastName';
    this.user.address = new Address();
    this.user.phones = new Array<Phone>();
    this.addPhone(3);
  }
  addPhone(min: number): void {
    for (let i = 0; i < min; i++) {
      this.user.phones.push(new Phone());
    }
  }
  removePhone(index: number): void {
    this.user.phones.splice(index, 1);
  }
}



