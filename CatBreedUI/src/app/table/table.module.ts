import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableBreedComponent } from './table-breed/table-breed.component';
import { RouterLink, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TableBreedComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TableBreedComponent
  ]
})
export class TableModule { }
