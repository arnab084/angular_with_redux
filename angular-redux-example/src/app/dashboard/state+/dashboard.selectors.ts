import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardStateModel } from './dashboard-state.model';
import { JobStateModel } from './job-state.model';

// export const selectUser = (state: DashboardState ) =>state;
export const jobStore = createFeatureSelector<DashboardStateModel>('userDetail');

export const getJobTimings = createSelector(
  jobStore,
  (state: DashboardStateModel) => state.jobState
);
