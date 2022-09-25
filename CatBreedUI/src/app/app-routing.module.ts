import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableBreedComponent } from './table/table-breed/table-breed.component';
import { AddCatComponent } from './create/add-cat/add-cat.component';
import { CatDetailsComponent } from './cat-details/cat-details/cat-details.component';

const routes: Routes = [
  { path: 'addCat', component: AddCatComponent },
  { path: 'detail/:id', component: CatDetailsComponent },
  { path: 'table', component: TableBreedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
