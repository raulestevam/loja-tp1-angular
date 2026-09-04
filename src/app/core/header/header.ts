import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './header.css',
})
export class Header {
  titulo = input.required<string>();
  textoSobre = output<string>();

  enviarSobre(): void {
    this.textoSobre.emit('Técnicas de Programação I. \nDesenvolvido por Raul Estevam');
  }
  exibirMensgem(msg: string): void {
    alert(msg);
  }
}
