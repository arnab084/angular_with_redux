import { JobStateModel } from "./job-state.model";

export interface DashboardStateModel {
  jobState?: JobStateModel[];
}
