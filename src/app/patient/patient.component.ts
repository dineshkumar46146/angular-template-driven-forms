import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  toppings = new FormControl();

  toppingList: string[] = ['Male', 'Female', 'Others', ];
  toppings1 = new FormControl();

  toppingList1: string[] = ['Male', 'Female', 'Others', ];
  

  constructor() { }

  ngOnInit() {
  }

}
