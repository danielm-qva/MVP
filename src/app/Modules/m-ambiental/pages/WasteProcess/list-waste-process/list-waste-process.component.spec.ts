import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWasteProcessComponent } from './list-waste-process.component';

describe('ListWasteProcessComponent', () => {
  let component: ListWasteProcessComponent;
  let fixture: ComponentFixture<ListWasteProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWasteProcessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWasteProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
