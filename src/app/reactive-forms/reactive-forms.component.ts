import { Component, OnInit } from '@angular/core';
import {User, Address, Phone } from '../user.model'
import { FormGroup, FormControl, Validators,FormBuilder,FormArray } from '@angular/forms';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  user :FormGroup;
  constructor(private formBuilder :FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }
  initForm():void {
    this.user = this.formBuilder.group({
      firstName :new FormControl('firstName',[Validators.required]),
      lastName :new FormControl('lastName',[Validators.required]),


    });
    
  }

  
}
