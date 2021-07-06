import { User } from "./model/user.model";

export interface AppState {
  readonly users: User[];
}
