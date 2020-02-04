import { Injectable } from '@angular/core';
import { Session } from 'src/class/chart';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  public session = new Session();
  // 入れ物
  public sessionSubject = new Subject<Session>();
  // 中身
  public sessionState = this.sessionSubject.asObservable();

  constructor(
    private router: Router,
  ) { }

  login(): void {
    this.session.login = true;
    console.log('sessionService.login = ' + this.session.login);
    
    this.sessionSubject.next(this.session);
    this.router.navigate(['/']);
  }

  logout(): void {
    this.sessionSubject.next(this.session.reset());
    console.log('sessionService.login = ' + this.session.login);
    this.router.navigate(['/login']);
  }
}
