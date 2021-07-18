import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUtilsToolsComponent } from './add-utils-tools.component';

describe('AddUtilsToolsComponent', () => {
  let component: AddUtilsToolsComponent;
  let fixture: ComponentFixture<AddUtilsToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUtilsToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUtilsToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
