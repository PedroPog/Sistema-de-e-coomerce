import { Component } from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { SessaoService } from 'src/app/services/sessao.service';

@Component({
  selector: 'home-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  name:string = this.sessao.getUsuario();
  role:string = this.sessao.getSessao();
  constructor(
    private sessao:SessaoService,
    private carrinho:CarrinhoService
  ){
  }

  public limparSessao(){
    this.sessao.limparSessao();
  }
}
