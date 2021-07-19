import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmetrologiaComponent } from './addmetrologia.component';

describe('AddmetrologiaComponent', () => {
  let component: AddmetrologiaComponent;
  let fixture: ComponentFixture<AddmetrologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmetrologiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmetrologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
