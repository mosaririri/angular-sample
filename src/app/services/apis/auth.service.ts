import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  login(id: string, password: string){
    
    return this.http.get('api/auth/login', {params: {id: id, password: password}});
  } 
}
