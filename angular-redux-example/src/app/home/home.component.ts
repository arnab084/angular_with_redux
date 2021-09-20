import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import { setJobTimings } from '../dashboard/state+/dashboard.actions';
import { getJobTimings } from '../dashboard/state+/dashboard.selectors';
import { JobStateModel } from '../dashboard/state+/job-state.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  jobState:any;
  constructor(private  store: Store<{}>) {


  }

  ngOnInit(): void {
    this.store.select(getJobTimings).subscribe(jobState => {
      console.log("jobState",jobState);
      this.jobState = jobState;
    });
  }

  i = 0;
  AddJob1(){
    // this.dashboard = ;
    let newState: JobStateModel[] = [{jobId:1}];
    this.jobState = newState.concat(this.jobState.job);
    this.store.dispatch(setJobTimings({job:this.jobState}));
    console.log("Finished");
  }
  AddJob2(){
    // this.dashboard = ;
    let newState: JobStateModel[] = [{jobId:2}];
    this.jobState = newState.concat(this.jobState.job);
    this.store.dispatch(setJobTimings({job:this.jobState}));
    console.log("Finished");
  }

}
