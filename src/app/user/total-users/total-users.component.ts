import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './../user.service';

@Component({
  selector: 'app-total-users',
  templateUrl: './total-users.component.html',
  styleUrls: ['./total-users.component.css']
})
export class TotalUsersComponent implements OnInit {

  value: number = 0;
  subscription: Subscription;

  constructor(private userService: UserService) {
    this.subscription = this.userService.asObservable().subscribe(
      (data) => {
        this.value = data;
      },
      (error) => {},
      () => {
        //alert('Complete!');
      }
    );
  }

  ngOnInit(): void {
    this.value = this.userService.getUsers()?.length;
  }
}
