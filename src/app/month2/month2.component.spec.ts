import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Month2Component } from './month2.component';

describe('Month2Component', () => {
  let component: Month2Component;
  let fixture: ComponentFixture<Month2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Month2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Month2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
