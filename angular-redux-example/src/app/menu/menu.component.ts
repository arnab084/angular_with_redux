import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../app.state";
import {AddUser} from './../actions/user.actions'
import {User} from "../model/user.model";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  addUser(name: string, url: string) {
    // this.store.dispatch(new UserActions.AddUser({name: name, url: url}) )
    let user:User = {name:"abc",url:"ccc"};
    this.store.dispatch(AddUser({user: user}));
  }
  ngOnInit(): void {
  }

}
