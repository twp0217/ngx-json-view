import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxJsonViewComponent } from './ngx-json-view.component';

describe('NgxJsonViewComponent', () => {
  let component: NgxJsonViewComponent;
  let fixture: ComponentFixture<NgxJsonViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxJsonViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxJsonViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
