import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAFTangibleComponent } from './add-aftangible.component';

describe('AddAFTangibleComponent', () => {
  let component: AddAFTangibleComponent;
  let fixture: ComponentFixture<AddAFTangibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAFTangibleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAFTangibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
