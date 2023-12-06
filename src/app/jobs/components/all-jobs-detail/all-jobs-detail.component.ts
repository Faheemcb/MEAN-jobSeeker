import { Component, Input } from '@angular/core';
import { response } from '../../models/job';
import { JobService } from '../../services/job.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-jobs-detail',
  templateUrl: './all-jobs-detail.component.html',
  styleUrls: ['./all-jobs-detail.component.css']
})
export class AllJobsDetailComponent {
  @Input() job: any;
  constructor(private jobService:JobService,private router:Router){}

  applyJob(id:number){
    this.router.navigate(['jobseeker-home/upload-resume'],{state:{jobId:id}});
  }
}
