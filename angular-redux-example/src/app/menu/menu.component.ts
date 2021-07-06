import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../app.state";
import * as UserActions from './../actions/user.actions'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private store: Store<AppState>) {}

  addTutorial(name: string, url: string) {
    this.store.dispatch(new UserActions.AddUser({name: name, url: url}) )
  }
  ngOnInit(): void {
  }

}
