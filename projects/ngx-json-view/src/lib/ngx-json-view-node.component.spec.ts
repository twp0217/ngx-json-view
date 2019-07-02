import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxJsonViewNodeComponent } from './ngx-json-view-node.component';

describe('NgxJsonViewNodeComponent', () => {
  let component: NgxJsonViewNodeComponent;
  let fixture: ComponentFixture<NgxJsonViewNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxJsonViewNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxJsonViewNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
