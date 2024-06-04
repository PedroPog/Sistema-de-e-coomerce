import { Injectable } from '@angular/core';
import { Local } from './url.model';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ProdutoDTO } from '../Models/produtos.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  private UrlLocal = new Local();

  private listarProdutos = this.UrlLocal.host+'/api/produtos';
  private cadastrarProduc = this.UrlLocal.host+'/api/produtos/cadastrar';

  constructor(private http:HttpClient) { }

  produtos():Observable<any>{
    return this.http.get<any>(this.listarProdutos)
      .pipe(
        catchError((error)=>{
          return throwError(error.status+": "+error.error);
        })
      );
  }
  cadastrarProduto(produto: ProdutoDTO) {
    return this.http.post<any>(this.cadastrarProduc, produto);
  }

}
