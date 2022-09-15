import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Registration } from '../model/registration';

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

  update(id: number, registration:Registration):Observable<Registration>{
      const urlL = `${this.url}/${id}`;
      return this.http.put<Registration>(urlL, registration );
  }

  getProduct(id:number):Observable<Registration[]>{
    return this.http.get<Registration[]>(`${this.url}/${id}`);
  }

}
