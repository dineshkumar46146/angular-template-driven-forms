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
  ngOnInit():void{
this.initForm();
  }
  
  initForm():void{
    this.user = this.formBuilder.group({
      firstName:new FormControl('first Name', [Validators.required]),
      address: this.initAddressGroup(),
    });
  }
  initAddressGroup():FormGroup{
    return this.formBuilder.group({
      street1: new FormControl ('str11',[Validators.required]),
    });
  }
}
