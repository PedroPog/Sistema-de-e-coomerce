import { Component } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Produtos } from '../../../../Models/produtos.model';

@Component({
  selector: 'home-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.scss']
})
export class PaginaInicialComponent {
  produto!: Produtos[];
  constructor(
    private service:ProdutosService
  ) {
    service.produtos().subscribe(resp=>{

      this.produto = resp;
      console.table(this.produto);
    })

  }
}
