import { Component, OnInit } from '@angular/core';
import { Cat } from 'src/app/model/cat-model';
import { CatServiceService } from 'src/app/cat-service.service';


@Component({
  selector: 'app-add-cat',
  templateUrl: './add-cat.component.html',
  styleUrls: ['./add-cat.component.scss']
})
export class AddCatComponent implements OnInit {
  cat: Cat = {id: undefined, name: "", breed: "", color: ""}


  constructor(private catService: CatServiceService) { }

  ngOnInit(): void {

  }

  OnSubmit(cat: Cat) {
    this.catService.addCat(cat).subscribe();
  }

}
