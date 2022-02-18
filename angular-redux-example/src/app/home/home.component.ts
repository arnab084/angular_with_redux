import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import * as DashboardActions from '../dashboard/state+/dashboard.actions';
import { getJobTimings } from '../dashboard/state+/dashboard.selectors';
import { JobStateModel } from '../dashboard/state+/job-state.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  jobState:any;

  viewType = {
    amount: true,
    quantity: false,
  };

  constructor(private  store: Store<{}>) {
  }

  ngOnInit(): void {
    this.store.select(getJobTimings).subscribe(jobState => {
      console.log("jobState",jobState);
      this.jobState = jobState;
    });
  }

  i = 0;
  AddJob(){
    if(this.jobState){
      this.jobState.push({jobId: this.i++});
    } else {
      this.jobState = [{jobId:1}];
    }
    this.store.dispatch(DashboardActions.addMultipleJobs(this.jobState));
    console.log("Finished");
  }

  actualData:any;



}
