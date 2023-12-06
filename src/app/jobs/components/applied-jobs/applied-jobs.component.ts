import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job.service';
import { job } from '../../models/job';
import { Router } from '@angular/router';
import { ConfirmBoxInitializer, DialogLayoutDisplay } from '@costlydeveloper/ngx-awesome-popup';

@Component({
  selector: 'app-applied-jobs',
  templateUrl: './applied-jobs.component.html',
  styleUrls: ['./applied-jobs.component.css']
})

export class AppliedJobsComponent implements OnInit {

  appliedJobList: any[] = [];
  

  constructor( private jobServcie: JobService,private router:Router ) {}

  ngOnInit() {
    this.getAppliedJobs()
    
}
deleteJob(id:any){
    const confirmation = window.confirm('Are you sure you want to proceed?');
    if (confirmation) {
      // Action when confirmed
      console.log('Confirmed');
      // Perform your action here after confirmation
      this.jobServcie.cancelJob(id).subscribe(response=>{
        console.log(response);
        const message=response.message;
        console.log(message);
        if(message ==='deleted'){
          alert("hi");
          this.getAppliedJobs(); 
        }
    })
    } else {
      // Action when declined
      console.log('Declined');

      // Perform your action here after decline
    }
  
  
}
getAppliedJobs(){
this.jobServcie.getAppliedJobs().subscribe((appliedJobs: any) => {

  this.appliedJobList=appliedJobs;
  console.log(appliedJobs);})
}
}

