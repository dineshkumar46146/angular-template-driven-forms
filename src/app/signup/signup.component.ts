import { Component, OnInit } from '@angular/core';
import { User } from './signup.interface';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],

})
export class SignupComponent implements OnInit {

  user : User = {
    name: '',
    account: {
      email: '',
      confirm: ''
    }
  };
  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    console.log(value, valid);
  }
  constructor() { }

  ngOnInit() {
  }

}
