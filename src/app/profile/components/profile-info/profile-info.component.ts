import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ProfileService } from '../../services/profile.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit{
  user: any;
  isEditMode = false;
  isDescriptionEditMode =  false;
  skillSection:any='';
  dropDownData:any;
  errorMessage:any;
  addedSkill:any;
  constructor(private authService: AuthService,private profileService:ProfileService) {}
  ngOnInit() {
    const user: any = sessionStorage.getItem('jobSeekerId') ;
    // console.log(JSON.parse(user));
    this.authService.getUserProfileById(user).subscribe((data: any[]) => {
      console.log(data);
      this.user = data[0];
      console.log(this.user[0].firstName)
    })
    this.getProfile();
    this.getSkillByUser();
  }
  toggleDescriptionEditMode() {
    this.isDescriptionEditMode = !this.isDescriptionEditMode;
  }
  updateProfile(form:NgForm) {
    alert(form.value.skillSection);
    const skillId=form.value.skillSection
    const skillsId=[skillId];
    // alert(id);
    this.profileService.addSkill(skillsId).subscribe(response=>{
      console.log(response.status)
    },
    (error: HttpErrorResponse) => {
      console.error('Error occurred:', error);
      console.log('Status:', error.status); // Access the status code
      if(error.status!==200){
        this.errorMessage="already added";
      }
     
    });
        this.isEditMode = false;
      }
      toggleEditMode() {
        this.isEditMode = !this.isEditMode;
      } 
      getProfile(){
        this.profileService.getAllSkill().subscribe(response=>{
          console.log(response);
          this.dropDownData=response;
        })
      } 
      getSkillByUser(){
        this.profileService.getSkillByUser().subscribe(response=>{
          console.log("skills"+response);
          // this.addedSkill=response[0].name;
          // console.log(this.addedSkill[0].name)
        })
      }
      
}
