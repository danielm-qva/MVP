import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAFTangibleComponent } from './list-aftangible.component';

describe('ListAFTangibleComponent', () => {
  let component: ListAFTangibleComponent;
  let fixture: ComponentFixture<ListAFTangibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAFTangibleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAFTangibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
