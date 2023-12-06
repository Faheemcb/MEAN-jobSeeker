import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }
  jobseekerId=sessionStorage.getItem('jobSeekerId');
  profileId=sessionStorage.getItem('profileId');

  uploadCV(jobSeekerId:any,profileId:any,profileName:any,profileSummary:any,title:any,formData:FormData,file:File){
    const fd = new FormData();
    fd.append('image', file,file.name);
    const headers = new HttpHeaders().set('Content-Type', 'multipart/form-data');
    return this.http.post<any[]>(environment.baseurl +'api/v1/'+`job-seeker/upload-resume?jobSeekerId=${jobSeekerId}&profileId=${profileId}&profileName=${profileName}&profileSummary=${profileSummary}&title=${title}`,fd,{headers})
  }
  getProfile()
  {
    return this.http.get<any>(environment.baseurl+this.jobseekerId+'/profile');
  }
  getResume(){
    return this.http.get<any>(environment.baseurl+'api/v1/job-seeker/getResume/'+this.profileId);
  }

  addSkill(data:any[]){
   
    return this.http.post<any>(environment.baseurl+this.jobseekerId+'/profile/'+this.profileId+'/skills',data);
  }
  getAllSkill(){
    return this.http.get<any>(environment.baseurl+'skills');
  }
  getSkillByUser(){
    return this.http.get<any>(environment.baseurl+'api/v1/job-seeker/getResume/'+this.profileId);
  }
}
