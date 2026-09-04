import { Component, model, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-quantidade-controle',
  imports: [],
  templateUrl: './quantidade-controle.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './quantidade-controle.css',
})
export class QuantidadeControle {
  contador = model<number>(1);

  decrementar() {
    this.contador.set(Math.max(0, this.contador() - 1));
  }
  incrementar() {
    this.contador.update((v) => v + 1);
  }
}
