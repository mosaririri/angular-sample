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

  login(id: string): void {
    // セッション情報を登録
    this.sessionSubject.next(this.session.regist(id));
    
    this.sessionSubject.next(this.session);
    this.router.navigate(['/']);
  }

  logout(): void {
    this.sessionSubject.next(this.session.reset());
    this.router.navigate(['/login']);
  }

  isLogin():boolean {
    return this.session.isLogin();
  }
}
