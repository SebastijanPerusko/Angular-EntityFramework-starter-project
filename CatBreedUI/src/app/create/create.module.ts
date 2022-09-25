import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCatComponent } from './add-cat/add-cat.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AddCatComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    AddCatComponent
  ]
})
export class CreateModule { }
