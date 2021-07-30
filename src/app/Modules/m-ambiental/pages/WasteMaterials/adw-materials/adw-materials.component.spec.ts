import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdwMaterialsComponent } from './adw-materials.component';

describe('AdwMaterialsComponent', () => {
  let component: AdwMaterialsComponent;
  let fixture: ComponentFixture<AdwMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdwMaterialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdwMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
