import { User } from './../../../shared/models/user.model';
import { UsersService } from '../../../core/services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  public users: User[];

  // inject service in constructor
  constructor(private userService: UsersService) { }

  // set data on component
  ngOnInit(): void {
    // find all users
    console.log('on init');

    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

}
