import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../../../model/produto';
import { DescontoPipe } from '../../../shared/pipes/desconto-pipe';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [DescontoPipe, CurrencyPipe],
  selector: 'app-produto-detalhe',
  styleUrl: './produto-detalhe.css',
  templateUrl: './produto-detalhe.html',
})
export class ProdutoDetalhe {
  public router = inject(Router);
  public route = inject(ActivatedRoute);
  public produtoService = inject(ProdutoService);

  carregando = signal(true);
  produto = signal<Produto | undefined>(undefined);

  constructor(){
    this.route.paramMap.subscribe(pm => {
      const id = pm.get('id') ? Number(pm.get('id')): NaN;
      if(isNaN(id)){
        this.produto.set(undefined);
        this.carregando.set(false);
        return
      }
      this.carregando.set(true);
      this.produtoService.getById(id).subscribe(p =>{
        this.produto.set(p);
        this.carregando.set(false);
      });
    });
  }

  voltar(){
    this.router.navigateByUrl('/produtos');
    // this.router.navigate(['/produtos']);
  }

}
