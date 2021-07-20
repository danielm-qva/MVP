import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleMetrologiaComponent } from './detalle-metrologia.component';

describe('DetalleMetrologiaComponent', () => {
  let component: DetalleMetrologiaComponent;
  let fixture: ComponentFixture<DetalleMetrologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleMetrologiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleMetrologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
