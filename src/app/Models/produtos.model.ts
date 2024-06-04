export interface Produtos {
  id: number;
  nomeProduto: string;
  descricao: string;
  preco: number;
  status: boolean;
  nacionalidade: string;
  estoque: number;
  imagens: string[];
}

export interface ProdutoDTO {
  nomeProduto: string;
  descricao: string;
  preco: number;
  status: boolean;
  nacionalidade: string;
  estoque: number;
}
