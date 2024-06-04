import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessaoService {

  getSessao(){
    return sessionStorage.getItem("role") as string;
  }
  getUsuario(){
    return sessionStorage.getItem("nome") as string;
  }
  limparSessao(){
    sessionStorage.clear();
    this.route.navigate(['/']);
    location.reload();
  }
  salvarSessao(obj:any){
    sessionStorage.setItem("nome",obj.nome);
    sessionStorage.setItem("role",obj.role);
    if(obj.role=="Administrador"){
      return this.route.navigate(['/admin']);
    }
    return this.route.navigate(['/']);
  }


  constructor(
    private route:Router,
    private _dialog:MatDialog
  ) { }
}
