import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../models/UserLogin';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<any[]>(environment.baseurl + '/users')
  }

 signUp(user: any) {
    return this.http.post(environment.baseurl +'api/v1/job-seeker/signup', user)
  }

  verifyEmail(jobSeekerSignupRequestId:any){
    
    return this.http.get(environment.baseurl +'api/v1/job-seeker/signup/'+jobSeekerSignupRequestId+'/verify-email')
  }

  getUserProfileById(id: string) {
    return this.http.get<any[]>(environment.baseurl +id+'/profiledetails')
  }
  signIn(user:UserLogin){

    return this.http.post(environment.baseurl + 'api/v1/job-seeker/login', user)
  }
  getToken(): any {
    return localStorage.getItem('accessToken') // Return an empty string if the token is null or undefined
  }
  setNewPassword(pass: string,jobSeekerSignupRequestId:any) {
    // const data = { password: pass };
    const jsonString = JSON.stringify(pass);
    return this.http.post(environment.baseurl +'api/v1/job-seeker/signup/'+jobSeekerSignupRequestId+'/set-password',jsonString,{ observe: 'response', responseType: 'text' });
  }
  
}
