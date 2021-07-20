import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActivoFTComponent } from './update-activo-ft.component';

describe('UpdateActivoFTComponent', () => {
  let component: UpdateActivoFTComponent;
  let fixture: ComponentFixture<UpdateActivoFTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateActivoFTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateActivoFTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
