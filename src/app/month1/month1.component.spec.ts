import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Month1Component } from './month1.component';

describe('Month1Component', () => {
  let component: Month1Component;
  let fixture: ComponentFixture<Month1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Month1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Month1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
