import { inject, Injectable } from '@angular/core';
import { LoggerService } from '../../../core/services/logger/logger.service';
import { Produto } from '../../../model/produto';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private logger = inject(LoggerService);

  private readonly listaMock = <Produto[]>[
    {
      id: 1,
      nome: 'Mouse Gamer Logitech Series G Pro X Superlight 2 Preto',
      preco: 899.99,
      descricao: 'Mouse gamer profissional superleve, indicado para Atletas de E-sports e Pro Players',
      imageUrl: 'images/card-produto/mouse.png',
      promo: false,
      estado: 'novo'
    },
    {
      id: 2,
      nome: 'Monitor Gamer Benq Zowie XL2586X+, 24.1, TN, FHD, 1ms, 600Hz, DyAc 2, HDMI/DP, XL2586X-PLUS',
      preco: 11399.99,
      descricao: 'Monitor de alto desempenho destinado a jogadores profissionais',
      imageUrl: 'images/card-produto/zowie.png',
      promo: false,
      estado: 'esgotado'
    },
    {
      id: 3,
      nome: 'Secretlab Cadeira para jogos Titan Evo Cookies & Cream',
      preco: 12999.99,
      descricao: 'Conforto no dia-a-dia para jogar ou trabalhar',
      imageUrl: 'images/card-produto/cadeira.png',
      promo: true,
      estado: 'usado'
    },
    {
      id: 4,
      nome: 'Headset Gamer Logitech Astro A20 X, RGB, Drivers 40mm, Bluetooth, Preto, 939-002246',
      preco: 1349.99,
      descricao: 'Imersão auditiva de alto nível',
      imageUrl: 'images/card-produto/headset.jpg',
      promo: true,
      estado: 'novo'
    },
  ];

  listar(): Observable<Produto[]>{
    this.logger.info("[PRODUTO.SERVICE()] - Retornando lista de produtos")
    return of(this.listaMock).pipe(delay(250));
  }
}
