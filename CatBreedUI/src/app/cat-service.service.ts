import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { CATS } from './mock-data-cat';
import { Cat } from './model/cat-model';

@Injectable({
  providedIn: 'root'
})
export class CatServiceService {
  cats: Cat[] = CATS;

  constructor() { }


  getCats(): Observable<Cat[]> {
    const Returncats = of(this.cats)
    return Returncats;
  }
}
