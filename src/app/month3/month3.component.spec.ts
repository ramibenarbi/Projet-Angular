import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Month3Component } from './month3.component';

describe('Month3Component', () => {
  let component: Month3Component;
  let fixture: ComponentFixture<Month3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Month3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Month3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
