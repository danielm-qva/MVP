import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProteccionComponent } from './list-proteccion.component';

describe('ListProteccionComponent', () => {
  let component: ListProteccionComponent;
  let fixture: ComponentFixture<ListProteccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProteccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProteccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
