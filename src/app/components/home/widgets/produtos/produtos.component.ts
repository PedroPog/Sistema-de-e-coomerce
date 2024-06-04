import { Component, Input } from '@angular/core';
import { Produtos } from 'src/app/Models/produtos.model';

@Component({
  selector: 'widgets-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent {
  @Input() produtos!: Produtos;
}
