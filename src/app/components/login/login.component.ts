import { Component, OnInit } from '@angular/core';
import { UsersApiService } from '../../services/apis/users-api.service';
import { AuthService } from '../../services/apis/auth.service';
import { FormControl, Validator } from '@angular/forms';
import { Router } from '@angular/router';
import { pipe } from 'rxjs';
import { first } from 'rxjs/operators'
import { Session } from 'protractor';
import { SessionService } from 'src/app/services/session.service';

export class PrivateAPIKeySet {
  constructor(
    public key: string, 
    public secret: string,
  ){ }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  errorMessage = '';
  keySet = new PrivateAPIKeySet('','');
  hide = true;

  constructor(
    private usersApiService: UsersApiService,
    private authService: AuthService,
    public router: Router,
    private sessionService: SessionService,
  ) { }

  ngOnInit() {
    
  }

  onSubmit() {

    const key = this.keySet.key;
    const secret = this.keySet.secret;
    
    this.authService.login(key, secret).subscribe((isAuth) => {
      if (isAuth) {
        console.log('ok');
        this.sessionService.login(key);
      }else{
        console.log('ng');
      }
    });
    /*
    emailとパスでユーザーを取得するロジックが必要
    その前にemai列も必要
    this.usersApiService.getUserById(this.keySet.key).pipe(first()).subscribe((user) => {
      this.router.navigateByUrl('')
    }, (err) => {
      this.errorMessage = err;
      setTimeout(() => {
       this.errorMessage = ''; 
      }, 2000);
    });
*/
  }
}
