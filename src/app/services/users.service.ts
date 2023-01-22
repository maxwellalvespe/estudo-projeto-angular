import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  host = 'http://localhost:9098'
  context = 'ms-votacao'
  resource = '/ms-votacao/usuarios'
  url:string = `${this.resource}`
  
  constructor(private httpClient: HttpClient) { }

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  getUsers():Observable<Users[]>{
    var retorno = this.httpClient.get<Users[]>(this.url)
    .pipe(retry(2),catchError(this.handleError))
    return retorno
  }

    handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
