import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { Registration } from '../model/registration';
import { Response } from 'src/app/Response';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

private url = 'http://localhost:3000/registrations'
  constructor(private http: HttpClient ) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  create(registration:Registration):Observable<Registration>{
    return this.http.post<Registration>(this.url, registration);
  }

  getAll():Observable<Registration[]>{
    return this.http.get<Registration[]>(this.url);
  }

  remove(id:number){
    return   this.http.delete<Registration>(`${this.url}/${id}`);
  }

  update(registration:Registration):Observable<Registration>{
     return this.http.patch<Registration>(this.url, registration );

  }

  getProduct(id:number):Observable<Registration[]>{
    return this.http.get<Registration[]>(`${this.url}/${id}`);
  }

}
