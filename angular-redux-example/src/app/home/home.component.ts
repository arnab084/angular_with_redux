import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../model/user.model";
import {AppState} from "../app.state";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: Observable<User[]>;
  constructor(private  store: Store<AppState>) {
    this.users = store.select("user");
    console.log(this.users);
    this.userList = [];
  }
  userList: User[];

  ngOnInit(): void {
    this.users.subscribe( users => {
      this.userList = users;
    })
  }

}
