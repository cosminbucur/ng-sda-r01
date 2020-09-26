import { Language } from './../../../shared/models/language.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.scss']
})
export class ModelDrivenComponent implements OnInit {

  public registrationForm: FormGroup;

  public languages: Language[] = [
    {value: 'ro', viewValue: 'Romanian'},
    {value: 'en', viewValue: 'English'},
    {value: 'ge', viewValue: 'German'}
  ];

  constructor() { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
      }),
      email: new FormControl(),
      password: new FormControl('', Validators.required),
      language: new FormControl()
    });
  }

  public onSubmit(): void {
    console.log('submit');
  }

  public cancel(): void {
    console.log('canceled');
  }
}
