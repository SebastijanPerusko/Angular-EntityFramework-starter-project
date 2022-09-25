import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatDetailsComponent } from './cat-details/cat-details.component';




@NgModule({
  declarations: [
    CatDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CatDetailsComponent
  ]
})
export class CatDetailsModule { }
