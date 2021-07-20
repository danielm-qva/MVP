import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUtilesComponent } from './update-utiles.component';

describe('UpdateUtilesComponent', () => {
  let component: UpdateUtilesComponent;
  let fixture: ComponentFixture<UpdateUtilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUtilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUtilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
