import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipTableComponent } from './ship-table.component';

describe('ShipTableComponent', () => {
  let component: ShipTableComponent;
  let fixture: ComponentFixture<ShipTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
