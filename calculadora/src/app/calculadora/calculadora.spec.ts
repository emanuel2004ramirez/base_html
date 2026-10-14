import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Calculadora } from './calculadora';

describe('Calculadora', () => {
  let component: Calculadora;
  let fixture: ComponentFixture<Calculadora>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Calculadora],
    }).compileComponents();

    fixture = TestBed.createComponent(Calculadora);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add both numbers', () => {
    component.a.set(2);
    component.b.set(3);

    component.sumar();

    expect(component.resultado()).toBe(5);
  });

  it('should reset the calculator', () => {
    component.a.set(4);
    component.b.set(6);
    component.sumar();

    component.reiniciar();

    expect(component.a()).toBe(0);
    expect(component.b()).toBe(0);
    expect(component.resultado()).toBe(0);
  });
});
