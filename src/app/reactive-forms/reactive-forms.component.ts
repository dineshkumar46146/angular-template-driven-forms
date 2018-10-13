import { Component, OnInit } from '@angular/core';
import { User, Address, Phone } from '../user.model';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormGroup,
  FormArray
} from '@angular/forms';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  user: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.user = this.formBuilder.group({
      firstName: new FormControl('first Name', [Validators.required]),
      lastName: new FormControl('last Name', [Validators.required]),
      emailId: new FormControl('last Name', [Validators.required]),
      address: this.initAddressGroup(),
      phones: this.formBuilder.array([])
    });
    this.addPhone(3);

    console.log(this.user);
  }
  initAddressGroup(): FormGroup {
    return this.formBuilder.group({
      street1: new FormControl('str11', [Validators.required]),
      street2: new FormControl('str222', [Validators.required]),
      street3: new FormControl('str33', [Validators.required]),
      city: new FormControl('city', [Validators.required]),
      state: new FormControl('state', [Validators.required]),
      country: new FormControl('country', [Validators.required]),
      zipCode: new FormControl('12121', [Validators.required])
    });
  }

  initPhoneGroup(): FormGroup {
    return this.formBuilder.group({
      country: ['country', [Validators.required]],
      type: ['type', [Validators.required]],
      number: ['1223456', [Validators.required]]
    });
  }

  addPhone(count: number) {
    for (let i = 0; i < count; i++) {
      (<FormArray>this.user.controls['phones']).controls.push(
        this.initPhoneGroup()
      );
    }
  }
  removePhone(index: number): void {
    (<FormArray>this.user.controls['phones']).controls.splice(index, 1);
  }
  submit() {
    console.log(JSON.stringify(this.user.value));
  }
}
