import { HttpClient, HttpResponse, HttpRequest, HttpHeaders,
  HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';

import { throwError } from 'rxjs';
import { Familia } from './familias/familia';
import { Chave } from './chave';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {
  public arfam = [];
  contatosUrl = 'http://maramajo.ddns.net/soapi/';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  //                             'Access-Control-Allow-Origin': '*' })
  };

  constructor(private http: HttpClient) { }
  getFams(c: Chave): Observable<Familia[]>{
    let URL = this.contatosUrl + "get_families/";
    return this.http.post<Familia[]>(URL, c, this.httpOptions)
         .pipe(
         
         catchError(e => this.handleError(e)))
         
   }

   private handleError(error: HttpErrorResponse){
    console.log(error);
   return throwError(error);
   
  }
  

}
