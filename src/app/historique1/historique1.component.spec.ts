import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Historique1Component } from './historique1.component';

describe('Historique1Component', () => {
  let component: Historique1Component;
  let fixture: ComponentFixture<Historique1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Historique1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Historique1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
