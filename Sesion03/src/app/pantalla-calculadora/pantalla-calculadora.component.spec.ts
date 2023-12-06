import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaCalculadoraComponent } from './pantalla-calculadora.component';

describe('PantallaCalculadoraComponent', () => {
  let component: PantallaCalculadoraComponent;
  let fixture: ComponentFixture<PantallaCalculadoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantallaCalculadoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PantallaCalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
