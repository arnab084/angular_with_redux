import { Action } from '@ngrx/store'
import { User } from '../model/user.model'
import * as UserActions from '../actions/user.actions'

const initialState: User = {
  name:'Arnab',
  url:'http://localhost:8080'
}

export function reducer(state: User[] = [initialState], action: UserActions.Actions){
  switch(action.type){
    case UserActions.ADD_USER:
      return [...state, action.payload];
    default:
        return state;
  }

}
