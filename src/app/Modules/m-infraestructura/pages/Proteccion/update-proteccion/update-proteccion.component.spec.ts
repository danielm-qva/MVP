import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProteccionComponent } from './update-proteccion.component';

describe('UpdateProteccionComponent', () => {
  let component: UpdateProteccionComponent;
  let fixture: ComponentFixture<UpdateProteccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProteccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProteccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
