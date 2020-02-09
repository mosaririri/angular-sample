import { Component } from '@angular/core';
import { SessionService } from './services/session.service';
import { Session } from 'src/class/chart';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-sample';

  public login = false;

  constructor(
    public sessionService: SessionService,
  ){}

  ngOnInit() {
    this.sessionService.sessionState.subscribe((session: Session) => {
      console.log('session: ' + session);
      
      if(session){
        this.login = session.isLogin();
      }
    });
    console.log('app-component-login:' + this.login);
    
  }


  logout() {
    this.sessionService.logout();
  }

}
