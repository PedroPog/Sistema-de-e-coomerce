import { Injectable } from '@angular/core';
import { Local } from './url.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private UrlLocal = new Local();

  private loginUser = this.UrlLocal.host+'/usuario/login';

  constructor(private http:HttpClient) { }

  login(login:string,senha:string):Observable<any>{
    let headers = new HttpHeaders;
    headers = headers.append('login',login);
    headers = headers.append('senha',senha);
    return this.http.get<any>(this.loginUser,{headers})
      .pipe(
        catchError((error)=>{
          return throwError(error.status+": "+error.error);
        })
      );
  }
}
