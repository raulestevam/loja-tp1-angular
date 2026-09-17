import { CommonModule } from '@angular/common';
import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
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
