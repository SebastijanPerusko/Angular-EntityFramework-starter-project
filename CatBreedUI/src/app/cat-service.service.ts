import { HttpClient } from '@angular/common/http';
import { isDelegatedFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';
import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { CATS } from './mock-data-cat';
import { Cat } from './model/cat-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatServiceService {
  url = "CatBreed";
  cats: Cat[] = CATS;

  constructor(private httpClient: HttpClient) { }


  // getCats(): Observable<Cat[]> {
  //   const Returncats = of(this.cats)
  //   return Returncats;
  // }

  getCats(): Observable<Cat[]> {
    return this.httpClient.get<Cat[]>(`${environment.apiUrl}/${this.url}`);
  }


  // setCat(cat: Cat): Observable<Cat[]> {
  //   let indexCat: number = this.cats.findIndex(x => x.id === cat.id);
  //   // console.log(indexCat);
  //   this.cats[indexCat] = cat;
  //   const Returncats = of(this.cats);
  //   return Returncats;
  // }

  setCat(cat: Cat): Observable<Cat[]> {
    return this.httpClient.put<Cat[]>(`${environment.apiUrl}/${this.url}`, cat);
  }


  // deleteCat(cat: Cat): Observable<Cat[]> {
  //   let indexCat: number = this.cats.findIndex(x => x.id === cat.id);
  //   // console.log(indexCat);
  //   this.cats.splice(indexCat, 1);
  //   const Returncats = of(this.cats);
  //   return Returncats;
  // }



  deleteCat(cat: Cat): Observable<Cat[]> {
    return this.httpClient.delete<Cat[]>(`${environment.apiUrl}/${this.url}/${cat.id}`);
  }

  // addCat(cat: Cat): Observable<Cat[]> {
  //   this.cats.push(cat);
  //   const Returncats = of(this.cats);
  //   return Returncats;
  // }

  addCat(cat: Cat): Observable<Cat[]> {
    return this.httpClient.post<Cat[]>(`${environment.apiUrl}/${this.url}`, cat);
  }
}
