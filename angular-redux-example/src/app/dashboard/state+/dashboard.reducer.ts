import { createReducer,on } from '@ngrx/store'
import * as DashboardActions from "./dashboard.actions"
import { JobStateModel } from './job-state.model';


export const initialState: JobStateModel = {};

export const reducer = createReducer(
  initialState,
    on(DashboardActions.setJobTimings, (state, { job }) => ({
      ...state,
      job
  })),
);
