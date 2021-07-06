import { Action } from '@ngrx/store'
import { User } from '../model/user.model'
import { createReducer, on } from '@ngrx/store';
import  * as UserActions from '../actions/user.actions'

const initialState: User = {
  name:'Arnab',
  url:'http://localhost:8080'
}

// export function userReducer(state: User[] = [initialState], userAction: Action){
//   // switch(userAction.type){
//   //   case UserActions.ADD_USER:
//   //     return [...state, userAction.payload];
//   //   default:
//         return state;
//   // }
//
//
//
// }

export const reducer = createReducer(
  initialState,
  on(UserActions.AddUser, (state) => ({
    ...state
  }))
);
