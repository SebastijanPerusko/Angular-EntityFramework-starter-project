import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cat } from 'src/app/model/cat-model';
import { CATS } from 'src/app/mock-data-cat';
import { CatServiceService } from 'src/app/cat-service.service';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.scss']
})
export class CatDetailsComponent implements OnInit {

  cats: Cat[] = CATS;
  
  constructor(private activatedroute: ActivatedRoute,
    private catService: CatServiceService) { }

  idCat: number = Number(this.activatedroute.snapshot.paramMap.get('id'));

  ngOnInit(): void {

    this.catService.getCats().subscribe(cats => this.cats = cats);
    this.cats = this.cats.filter(cats => cats.id === this.idCat);
    console.log(this.cats);

  }

  OnSubmit(cat: Cat) {
    this.catService.setCat(cat).subscribe();
  }

}
