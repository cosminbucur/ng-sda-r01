import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDirectiveDirective } from './my-directive.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MyDirectiveDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    // angular modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // 3rd party modules
    MaterialModule
  ]
})
export class SharedModule { }
