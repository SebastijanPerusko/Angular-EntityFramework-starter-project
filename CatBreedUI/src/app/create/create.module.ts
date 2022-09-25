import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCatComponent } from './add-cat/add-cat.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AddCatComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    AddCatComponent
  ]
})
export class CreateModule { }
