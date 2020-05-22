import { async, ComponentFixture, TestBed } from '@angular/core/testing';



import { RastreoPaquetesComponent } from './rastreo-paquetes.component';

describe('RastreoPaquetesComponent', () => {
  let component: RastreoPaquetesComponent;
  let fixture: ComponentFixture<RastreoPaquetesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RastreoPaquetesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RastreoPaquetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
