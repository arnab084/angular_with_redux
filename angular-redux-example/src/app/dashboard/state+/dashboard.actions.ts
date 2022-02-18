import { createAction, props } from '@ngrx/store';
import * as DashboardActionTypes from './dashboard-action.types';
import { JobStateModel } from './job-state.model';


export const addMultipleJobs = createAction(
  DashboardActionTypes.ADD_MULTIPLE_JOBS,
    props<{ jobs: Array<JobStateModel> }>()
)

export const addJob = createAction(
  DashboardActionTypes.ADD_JOB,
    props<{ job: JobStateModel }>()
)


