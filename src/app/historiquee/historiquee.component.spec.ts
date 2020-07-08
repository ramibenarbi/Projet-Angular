import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueeComponent } from './historiquee.component';

describe('HistoriqueeComponent', () => {
  let component: HistoriqueeComponent;
  let fixture: ComponentFixture<HistoriqueeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriqueeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
