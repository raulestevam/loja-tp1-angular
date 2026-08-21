import { Component } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";

@Component({
  selector: 'app-lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
  produtos = <Produto[]>[
    {
      id: 1,
      nome: 'Mouse Gamer Logitech Series G Pro X Superlight 2 Preto',
      preco: 899.99,
      descricao: 'Mouse gamer profissional superleve, indicado para Atletas de E-sports e Pro Players',
      imageUrl: 'images/card-produto/mouse.png',
      promo: false
    },
    {
      id: 2,
      nome: 'Monitor Gamer Benq Zowie XL2586X+, 24.1, TN, FHD, 1ms, 600Hz, DyAc 2, HDMI/DP, XL2586X-PLUS',
      preco: 11399.99,
      descricao: 'Monitor de alto desempenho destinado a jogadores profissionais',
      imageUrl: 'images/card-produto/zowie.png',
      promo: false
    },
    {
      id: 3,
      nome: 'Secretlab Cadeira para jogos Titan Evo Cookies & Cream',
      preco: 12999.99,
      descricao: 'Conforto no dia-a-dia para jogar ou trabalhar',
      imageUrl: 'images/card-produto/cadeira.png',
      promo: true
    },
  ];

  onViewProduct(id: number){
    alert('Visualizando Produto com id: '+id);
  }

  onAddProduct(produto:{id:number, qtd: number}){
    alert('Adicionado produto: '+produto.id+' | quantidade: '+produto.qtd);
  }
}
