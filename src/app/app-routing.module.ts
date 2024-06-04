import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { PaginaInicialComponent } from './components/home/components/pagina-inicial/pagina-inicial.component';
import { CarrinhoComponent } from './components/home/components/carrinho/carrinho.component';
import { ProdutosControllerComponent } from './components/administrador/components/produtos-controller/produtos-controller.component';
import { AddProdutoComponent } from './components/administrador/components/produtos-controller/add-produto/add-produto.component';
import { FoundErrorComponent } from './components/found-error/found-error.component';
import { DashboardControllerComponent } from './components/administrador/components/dashboard-controller/dashboard-controller.component';
import { PedidosControllerComponent } from './components/administrador/components/pedidos-controller/pedidos-controller.component';
import { UsuarioControllerComponent } from './components/administrador/components/usuario-controller/usuario-controller.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {path:'',component:PaginaInicialComponent},
      {path:'carrinho',component:CarrinhoComponent},
    ]
  },
  {path:'login',component:LoginComponent},
  {
    path:'admin',
    component:AdministradorComponent,
    children:[
      {path:'',component:DashboardControllerComponent},
      {path:'pedidos',component:PedidosControllerComponent},
      {path:'usuarios',component:UsuarioControllerComponent},
      {
        path:'produtos',
        component:ProdutosControllerComponent,
        children:[
          {path:'add',component:AddProdutoComponent},
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
