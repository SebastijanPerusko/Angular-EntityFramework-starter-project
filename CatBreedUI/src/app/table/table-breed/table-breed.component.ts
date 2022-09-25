import { Component, OnInit, ɵisDefaultChangeDetectionStrategy } from '@angular/core';
import { CatServiceService } from 'src/app/cat-service.service';
import { Cat } from 'src/app/model/cat-model';

@Component({
  selector: 'app-table-breed',
  templateUrl: './table-breed.component.html',
  styleUrls: ['./table-breed.component.scss']
})
export class TableBreedComponent implements OnInit {
  cats: Cat[] = [];

  constructor(private catService: CatServiceService) { }

  ngOnInit(): void {
    this.getCats();
  }

  getCats(): void {
    this.catService.getCats().subscribe(cats => this.cats = cats);
  }

  deleteCat(cat: Cat){
    this.catService.deleteCat(cat).subscribe(cats => this.cats = cats);
  }

}
