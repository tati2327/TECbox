import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodegViewComponent } from './bodeg-view.component';

describe('BodegViewComponent', () => {
  let component: BodegViewComponent;
  let fixture: ComponentFixture<BodegViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodegViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodegViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
