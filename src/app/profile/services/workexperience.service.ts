import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { WorkExperience } from '../models/WorkExperience';


@Injectable({
  providedIn: 'root'
})
export class WorkexperienceService {

  constructor(private  http:HttpClient) { }
experience : WorkExperience[] = []
  addWorkexperience(experience:WorkExperience){
    return this.http.post<WorkExperience[]>(environment.baseurl + '/api/v1/workexperiences',experience)
  }
}
