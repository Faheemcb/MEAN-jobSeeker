import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { Profile } from '../models/Profile';
import { Qualification } from '../models/qualification';
import { WorkExperience } from '../models/WorkExperience';

@Injectable({
  providedIn: 'root'
})


export class ProfileService {

  
  constructor(private http:HttpClient) { }

  profile :Profile[]=[]

  getallskills(){
    return this.http.get<any[]>(environment.baseurl + '/api/v1/skills')
  }

  getallprofiles(jobseekerid:string,jobseekerprofileid:string){
    return this.http.get<Profile>(`${environment.baseurl}/api/v1/jobseekers/${jobseekerid}/profiles/${jobseekerprofileid}` )
  }

  updateProfile(data:Profile){
<<<<<<< HEAD
    return this.http.put<Profile[]>(environment.baseurl+ '/api/v1/jobseekers/65729dc9a9665175aef9708f/profiles/65729dc9a9665175aef97095',data)
=======
    const jobseekerid = '65729bb7f2e09f18e2b2b244';
 const jobseekerprofileid = '65729bb7f2e09f18e2b2b24a';

    return this.http.put<Profile[]>(`${environment.baseurl}/api/v1/jobseekers/${jobseekerid}/profiles/${jobseekerprofileid}`,data)
>>>>>>> 01c4ab3804058325ccf3c656f425c0702e62d645
  }




  deleteSkill(id:number){
    return this.http.delete(environment.baseurl + `/api/v1/skills/${id}`)

  }

  getAllQualifications(){
    return this.http.get<any[]>(environment.baseurl+'/api/v1/qualifications')

  }



  updateQualification(data:Qualification){
    return this.http.put<Qualification[]>(environment.baseurl+ '/api/v1/jobSeekers/65729dc9a9665175aef9708f/profiles/65729dc9a9665175aef97095',data)
  }
  updateWorkExperience(data:WorkExperience){
    return this.http.put<WorkExperience[]>(environment.baseurl+ '/api/v1/jobSeekers/65729dc9a9665175aef9708f/profiles/65729dc9a9665175aef97095',data)
  }
}
