import { Component, OnInit } from '@angular/core';
import { UsersApiService } from 'src/app/sevices/apis/users-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.sass']
})
export class UserEditComponent implements OnInit {
  hide = true;

 user: any;

  constructor(
    private userApiService: UsersApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.userApiService.getUserById(id).subscribe(res => {
      console.log(res);
      this.user = res;
    });
  }

  onSubmit(){
    console.log(this.user);
  }
}
