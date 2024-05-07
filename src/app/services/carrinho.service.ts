import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  constructor() { }

  getCarrinho(usuario: string): any[] {
    const carrinhoStr = localStorage.getItem(usuario + '_carrinho');
    if (carrinhoStr) {
      return JSON.parse(carrinhoStr);
    } else {
      return [];
    }
  }
  salvarCarrinho(usuario: string, carrinho: any[]): void {
    localStorage.setItem(usuario + '_carrinho', JSON.stringify(carrinho));
  }

  limparCarrinho(usuario: string): void {
    localStorage.removeItem(usuario + '_carrinho');
  }

  adicionarItem(usuario: string, item: any): void {
    const carrinho = this.getCarrinho(usuario);
    carrinho.push(item);
    this.salvarCarrinho(usuario, carrinho);
  }

  removerItem(usuario: string, index: number): void {
    const carrinho = this.getCarrinho(usuario);
    carrinho.splice(index, 1);
    this.salvarCarrinho(usuario, carrinho);
  }
}
