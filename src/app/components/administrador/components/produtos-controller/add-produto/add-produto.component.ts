import { Component } from '@angular/core';
import { ProdutoDTO, Produtos } from 'src/app/Models/produtos.model';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-add-produto',
  templateUrl: './add-produto.component.html',
  styleUrls: ['./add-produto.component.scss']
})
export class AddProdutoComponent {
  produto: ProdutoDTO = {
    nomeProduto: '',
    descricao: '',
    preco: 0,
    status: false,
    nacionalidade: '',
    estoque: 0
  };
  imagens!: File[];

  constructor(private productService: ProdutosService) {}

  onSubmit() {
    this.productService.cadastrarProduto(this.produto).subscribe(
      response => {
        console.log('Produto cadastrado com sucesso', response);
        // Resetar o formulário ou redirecionar conforme necessário
      },
      error => {
        console.error('Erro ao cadastrar o produto', error);
      }
    );
  }
  onFileSelected(event: any) {
    const foto = event.target.files[0];

  }

}
