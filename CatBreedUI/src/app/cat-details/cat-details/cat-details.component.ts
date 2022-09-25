import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.scss']
})
export class CatDetailsComponent implements OnInit {



  constructor(private activatedroute: ActivatedRoute) { }

  idCat: number = Number(this.activatedroute.snapshot.paramMap.get('id'));

  ngOnInit(): void {

  }

}
