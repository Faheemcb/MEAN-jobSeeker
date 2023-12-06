import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, mergeMap } from 'rxjs';

import { job } from '../models/job';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http:HttpClient) { }
   jobSeekerId=sessionStorage.getItem('jobSeekerId');

  getJobs<response>(page: number, limit: number, query?: string){
    let params = new HttpParams()
    .set('page', page.toString())
    .set('limit', limit.toString());

     // If a query is provided, add it to the parameters
    //  if (query) {
    //   params = params.set('search', query);
    // }
    // return this.http.get(environment.baseurl +'/jp/api/v1/jobs',{params})
    return this.http.get(environment.baseurl+'api/v1/jobs')
  }

  getAppliedJobs() {
    return this.http.get<any[]>(environment.baseurl +'api/v1/job-seeker/'+this.jobSeekerId+'/job-application')
    
  }

  getJobsById(id: string) {
    return this.http.get<any[]>(environment.baseurl +'/jobs/'+id)
  }
  applyJob(jobId:any,resumeId:any,coverLetter:string){
  
  return this.http.post<any>(environment.baseurl +'api/v1/'+`job-seeker/job-application/${jobId}?ResumeId=${resumeId}&CoverLetter=${coverLetter}`,{ observe: 'response' });
  // return this.http.post<any[]>(environment.baseurl +'api/v1/'+`job-seeker/upload-resume?jobSeekerId=${jobSeekerId}&profileId=${profileId}&profileName=${profileName}&profileSummary=${profileSummary}&title=${title}`,fd,{headers})
  }
  saveJob(jobId:any){
    return this.http.post(environment.baseurl +'api/v1/job-seeker/SaveJob/'+jobId,null)

  }
  cancelJob(JobApplicationId:any){
   return this.http.delete<any>(environment.baseurl +'api/v1/job-seeker/'+this.jobSeekerId+'/job-application/'+JobApplicationId+'/cancel');
  }

}
