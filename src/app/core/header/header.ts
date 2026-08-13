import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  titulo = "Loja TP1 2026";

  exibirMensgem(msg:string):void{
    alert(msg);
}
}

