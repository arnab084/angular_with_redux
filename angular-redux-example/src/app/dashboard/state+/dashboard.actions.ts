import { createAction, props } from '@ngrx/store';
import * as DashboardActionTypes from './dashboard-action.types';
import { JobStateModel } from './job-state.model';


export const setJobTimings = createAction(
  DashboardActionTypes.SET_JOB_TIMINGS,
    props<{ job: Array<JobStateModel> }>()
)


