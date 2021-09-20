import { createFeatureSelector, createSelector } from '@ngrx/store';
import { JobStateModel } from './job-state.model';

// export const selectUser = (state: DashboardState ) =>state;
export const jobStore = createFeatureSelector<JobStateModel[]>('userDetail');

export const getJobTimings = createSelector(
  jobStore,
(state: JobStateModel[]) => state
);
