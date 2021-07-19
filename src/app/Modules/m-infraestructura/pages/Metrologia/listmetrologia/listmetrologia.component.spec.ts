import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmetrologiaComponent } from './listmetrologia.component';

describe('ListmetrologiaComponent', () => {
  let component: ListmetrologiaComponent;
  let fixture: ComponentFixture<ListmetrologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListmetrologiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmetrologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
