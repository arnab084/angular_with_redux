import {Action, createAction, props} from '@ngrx/store'
import { User } from '../model/user.model'

export const ADD_USER       = 'Add'


// export class AddUser implements Action {
//   readonly type = ADD_USER
//   constructor(public payload?: User ) {}
// }

export const AddUser = createAction(
  ADD_USER,
  props<{ user: User }>()
);


// export type UserActions = AddUser
