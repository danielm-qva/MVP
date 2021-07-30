import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListwMaterialsComponent } from './listw-materials.component';

describe('ListwMaterialsComponent', () => {
  let component: ListwMaterialsComponent;
  let fixture: ComponentFixture<ListwMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListwMaterialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListwMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
