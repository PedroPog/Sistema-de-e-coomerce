import { Component } from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { SessaoService } from 'src/app/services/sessao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  name:string = this.sessao.getUsuario();
  constructor(
    private sessao:SessaoService,
    private carrinho:CarrinhoService
  ){
  }
}
