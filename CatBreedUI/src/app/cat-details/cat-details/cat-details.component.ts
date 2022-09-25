import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cat } from 'src/app/model/cat-model';
import { CatServiceService } from 'src/app/cat-service.service';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.scss']
})
export class CatDetailsComponent implements OnInit {

  catsArray: Cat[] = [];
  
  constructor(private activatedroute: ActivatedRoute,
    private catService: CatServiceService) { }

  ngOnInit(): void {


    let idCat: number = Number(this.activatedroute.snapshot.paramMap.get('id'));

    this.getCats();
    console.log(this.catsArray.length);
    this.catsArray = this.catsArray.filter(catsArray => catsArray.id == idCat);

  }

  getCats() {
    this.catService.getCats().subscribe(cats => this.catsArray = cats);
  }

  OnSubmit(cat: Cat) {
    this.catService.setCat(cat).subscribe();
  }

}
