import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { SessaoService } from 'src/app/services/sessao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  login = new FormControl('',[Validators.required]);
  senha = new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]);

  loginForm = new FormGroup({
    login: this.login,
    senha: this.senha,
  });

  constructor(
    private service:LoginService,
    private sessao:SessaoService,
  ){}

  onSubmit(){
    console.table(this.loginForm.value);
    if(this.loginForm.valid){
      const login = this.loginForm.get('login')?.value as string;
      const senha = this.loginForm.get('senha')?.value as string;
      this.service.login(login,senha).subscribe(
        (res)=>{
          this.sessao.salvarSessao(res);
        }
      );
    }
  }
}
