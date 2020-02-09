import { Component, OnInit } from '@angular/core';
import { UsersApiService } from 'src/app/services/apis/users-api.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../class/user';

export class PrivateAPIKeySet {
  constructor(
    private name: string,
    private password: string,
    private positionCd: number,
  ){}
}
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.sass']
})
export class UserEditComponent implements OnInit {
  keySet = new PrivateAPIKeySet('','',0);
  hide = true;
  idText: string;
  nameText: string;
  passwordText: string;
  positionCdText: string;
  storeCdText: string;

 user: User;

  constructor(
    private userApiService: UsersApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.userApiService.getUserById(id).subscribe(res => {
      this.user = <User>res;
      console.log(this.user);
      this.idText = this.user.id;
      this.nameText = this.user.name;
      this.passwordText = this.user.password;
      this.positionCdText = this.user.positionCd;
      this.storeCdText = this.user.storeCd;

      
      
    });
  }

  onSubmit(){
    this.user.name = this.nameText;
    this.user.password = this.passwordText;
    this.user.positionCd = this.positionCdText;
    this.user.storeCd = this.storeCdText;
    console.log(this.user);
    console.log();
    
    const id = this.user.id;
    this.userApiService.update(id, this.user).subscribe(res => {
      console.log(res);
    });
  }
}
