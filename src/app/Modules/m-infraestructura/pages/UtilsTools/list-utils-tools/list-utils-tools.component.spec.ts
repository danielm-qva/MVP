import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUtilsToolsComponent } from './list-utils-tools.component';

describe('ListUtilsToolsComponent', () => {
  let component: ListUtilsToolsComponent;
  let fixture: ComponentFixture<ListUtilsToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUtilsToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUtilsToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
