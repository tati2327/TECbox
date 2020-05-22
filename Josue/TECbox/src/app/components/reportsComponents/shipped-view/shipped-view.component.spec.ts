import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippedViewComponent } from './shipped-view.component';

describe('ShippedViewComponent', () => {
  let component: ShippedViewComponent;
  let fixture: ComponentFixture<ShippedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
