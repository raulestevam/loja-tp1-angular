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
      return of();
    }
    
    criar(produto: Produto):Observable<any>{
      return this.http.post(this.apiUrl, ProdutoMapper.toJson(produto));
    }
}