import { Signup } from './../../../shared/models/signup.model';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  model: Signup = new Signup(); // container for the domain model
  email: string;  // container for the input in the component

  @ViewChild('#f') form: any; // reference to the ngForm instance

  languages: string[] = [
    'English',
    'French',
    'German'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    console.log('form submitted');
  }
}
