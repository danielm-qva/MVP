import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWasteProcessComponent } from './add-waste-process.component';

describe('AddWasteProcessComponent', () => {
  let component: AddWasteProcessComponent;
  let fixture: ComponentFixture<AddWasteProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWasteProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWasteProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
