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
  // userList: User[];
  constructor(private  store: Store<AppState>) {
    this.users = store.select("users");
    console.log(this.users);

  }

  ngOnInit(): void {
    this.users.subscribe(res => {
      console.log(res);
      // this.userList = res;
    })
  }

}
