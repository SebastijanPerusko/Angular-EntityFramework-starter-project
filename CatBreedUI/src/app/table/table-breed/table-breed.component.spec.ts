import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBreedComponent } from './table-breed.component';

describe('TableBreedComponent', () => {
  let component: TableBreedComponent;
  let fixture: ComponentFixture<TableBreedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableBreedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBreedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
