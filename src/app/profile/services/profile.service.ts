import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  getallskills(){
    return this.http.get<any[]>(environment.baseurl + '/api/v1/skills')
  }

  // selectedSkill(){
  //   return this.http.post<selectedSkill[]>(environment.baseurl + '/api/v1/skills/:id')
  // }

  deleteSkill(id:number){
    return this.http.delete(environment.baseurl + `/api/v1/skills/${id}`)

  }

  getAllQualifications(){
    return this.http.get<any[]>(environment.baseurl+'/api/v1/qualifications')

  }
}
