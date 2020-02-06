import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../session.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private session: SessionService,
  ) { }

  login(id: string, password: string){
    return this.http.get('api/auth/login', {params: {id: id, password: password}});
  } 

  isAuth(){
    return this.session.isLogin();
  }
}
