import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  constructor(
    private http: HttpClient,
  ) { }

  getUsers(){
    return this.http.get('api/users');
  }

  getUserById(id: string){
    return this.http.get('api/users/read-user/' + id);
  }

  update(id: string, body: any){
    return this.http.put('api/users/update-user/' + id, body);
  }
}
