import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMetrologiaComponent } from './update-metrologia.component';

describe('UpdateMetrologiaComponent', () => {
  let component: UpdateMetrologiaComponent;
  let fixture: ComponentFixture<UpdateMetrologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMetrologiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMetrologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
