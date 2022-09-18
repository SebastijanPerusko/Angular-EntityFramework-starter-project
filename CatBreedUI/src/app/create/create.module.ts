import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCatComponent } from './add-cat/add-cat.component';



@NgModule({
  declarations: [
    AddCatComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AddCatComponent
  ]
})
export class CreateModule { }
