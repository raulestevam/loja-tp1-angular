import { inject, Service } from '@angular/core';
import { Produto, ProdutoMapper } from '../../../model/produto';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { LoggerService } from '../../../core/services/logger/logger.service';
import { HttpClient } from '@angular/common/http';


@Service()
export class ProdutoService {
    private logger = inject(LoggerService);
    private http = inject(HttpClient);
    private apiUrl = 'https://fakestoreapi.com/products';

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
        this.logger.info("[PRODUTO SERVICE] - Retornando lista de produtos");
        return this.http.get<any[]>(this.apiUrl).pipe(
          map(lista => lista.map(prod => ProdutoMapper.fromJson(prod))),
          catchError(erro => {
            this.logger.error("[PRODUTO SERVICE] - Erro ao listar produtos");
            return of([])
          })
        )
    }

    getById(id: number): Observable<Produto | undefined>{
      //exercicio
      return of(this.listaMock.find(p => p.id == id)).pipe(delay(500));
    } 
}