import { Component, OnInit } from '@angular/core';
import { UsersApiService } from 'src/app/sevices/apis/users-api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass'],
  providers: [ UsersApiService ]
})
export class UsersComponent implements OnInit {
  users: any;

  constructor(
    private userApisService: UsersApiService,
  ) { }

  ngOnInit() {
    this.userApisService.getUsers().subscribe(res => {
      this.users = res;
    })
  }

}
