import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatDetailsComponent } from './cat-details/cat-details.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CatDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CatDetailsComponent
  ]
})
export class CatDetailsModule { }
