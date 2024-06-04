import { Component } from '@angular/core';
import { SessaoService } from 'src/app/services/sessao.service';

@Component({
  selector: 'adm-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss']
})
export class AdministradorComponent {
  readonly user = this.sessao.getUsuario();
  imagePath = "/assets/logo.png";
  constructor(
    private sessao:SessaoService
  ){}

  onLogout(){
    this.sessao.limparSessao();
  }
}
