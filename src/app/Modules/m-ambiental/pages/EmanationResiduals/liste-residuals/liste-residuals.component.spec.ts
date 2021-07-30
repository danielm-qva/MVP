import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeResidualsComponent } from './liste-residuals.component';

describe('ListeResidualsComponent', () => {
  let component: ListeResidualsComponent;
  let fixture: ComponentFixture<ListeResidualsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeResidualsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeResidualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
