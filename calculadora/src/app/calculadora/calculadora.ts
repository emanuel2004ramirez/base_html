import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-calculadora',
  styleUrl: './calculadora.css',
  templateUrl: './calculadora.html',
})
export class Calculadora {
  readonly a = signal(0);
  readonly b = signal(0);
  readonly resultado = signal(0);

  sumar(): void {
    this.resultado.update(() => this.a() + this.b());
  }

  reiniciar(): void {
    this.a.set(0);
    this.b.set(0);
    this.resultado.set(0);
  }
}
