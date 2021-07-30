import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeResidualsComponent } from './adde-residuals.component';

describe('AddeResidualsComponent', () => {
  let component: AddeResidualsComponent;
  let fixture: ComponentFixture<AddeResidualsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeResidualsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeResidualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
