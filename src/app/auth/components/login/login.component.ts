import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { UserLogin } from '../../models/UserLogin';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  backgroundImageUrl = '../../../../../assets/images/LoginPageImg.png';

  users: any[] = [];
  signInUser!: UserLogin;

  constructor(private authService: AuthService, private router: Router,private profileService:ProfileService) {
    // this.authService.getAllUsers().subscribe(
    //   (users: any[]) => {
    //     console.log(users);
    //     this.users = users;
    //   }
    // )
  }

  login(loginForm: NgForm) {
    // console.log(loginForm.value);
    // this.signInUser.username=loginForm.value.username;
    // this.signInUser.password=loginForm.value.password;
    // this.authService.signIn(loginForm.value).subscribe((response:any)=>{
    // console.log(response,response['token']);
    // // console.log(response,response['id']);
    // localStorage.setItem('accessToken',response['token']);
    // sessionStorage.setItem('email',loginForm.value.email);
    // sessionStorage.setItem('jobSeekerId',response['id']);
    // sessionStorage.setItem('username',response['userName']);
    this.router.navigate(['jobseeker-home/findAllJobs']);
    this.getProfile();
// })
 }

 getProfile(){
this.profileService.getProfile().subscribe(response=>{
console.log("profileId------------"+response.id);
sessionStorage.setItem('profileId',response.id);
})
 }

}
  
 