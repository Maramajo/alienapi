import { HttpClient, HttpResponse, HttpRequest, HttpHeaders,
   HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alien } from './alien';
import { Observable, of  } from 'rxjs';
import { catchError, map, tap,  } from 'rxjs/operators';
import { throwError } from 'rxjs';
//import 'rxjs/add/observable/throw';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class AliensService {
  contatosUrl = 'http://localhost:8080/demorest/webapi/aliens';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
    constructor(private _httpService: HttpClient) { }

getAllAliens(): Observable<Alien[]>{
 return this._httpService.get<Alien[]>(this.contatosUrl)
 //     .tap((response: Response) => response.json())
      .pipe(
      
      catchError(e => this.handleError(e)));
}
/** POST: add a new hero to the server */
addAlien(al: Alien): Observable<Alien> {
  let URL = this.contatosUrl + "/alien";
  return this._httpService.post<Alien>(URL, al, this.httpOptions).pipe(
    tap((newAlien: Alien) => console.log(`added alien w/ id=${newAlien.id} name=${newAlien.name}`)),
    catchError(e => this.handleError(e))
  );
}
/** PUT: add a new hero to the server */
updAlien(al: Alien): Observable<Alien> {
  let URL = this.contatosUrl + "/upd";
  return this._httpService.put<Alien>(URL, al, this.httpOptions).pipe(
    tap((newAlien: Alien) => console.log(`atualizado alien w/ id=${newAlien.id} name=${newAlien.name}`)),
    catchError(e => this.handleError(e))
  );
}

/** DELETE: add a new hero to the server */
// id: string
delAlien(al: Alien): Observable<Alien> {
  console.log("estou em delalien - ", al);
  let URL = this.contatosUrl + "/del/" + al.id;
  return this._httpService.delete<Alien>(URL,  this.httpOptions).pipe(
    tap((newAlien: Alien) => console.log(`deleted alien w/ id=${newAlien.id} name=${newAlien.name}`)),
    catchError(e => this.handleError(e))
  );
}
/** GET: add a new hero to the server */
// id: string
getAlien(al: Alien): Observable<Alien> {
  console.log("estou em get 1 alien - ", al);
  let URL = this.contatosUrl + "/alien/" + al.id;
  return this._httpService.get<Alien>(URL,  this.httpOptions).pipe(
    tap((newAlien: Alien) => console.log(`get 1  alien w/ id=${newAlien.id} name=${newAlien.name}`)),
    catchError(e => this.handleError(e))
  );
}


private handleError(error: HttpErrorResponse){
  console.log(error);
 return throwError(error);
 //return Observable.throw(console.error(error));
 
}
}
