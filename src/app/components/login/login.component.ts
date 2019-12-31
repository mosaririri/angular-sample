import { Component, OnInit } from '@angular/core';
import { UsersApiService } from '../../sevices/apis/users-api.service';
import { FormControl, Validator } from '@angular/forms';

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
  keySet = new PrivateAPIKeySet('','');
  hide = true;

  constructor(
    private usersApiService: UsersApiService,
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.keySet);
    console.log(this.keySet.key);
    console.log(this.keySet.secret);
    // this.usersApiService.getUserById()

  }
}
