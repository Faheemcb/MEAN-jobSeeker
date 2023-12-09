import { ProfileService } from 'src/app/profile/services/profile.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Skill } from '../../models/skill';
import { Qualification } from '../../models/qualification';
import { WorkExperience } from '../../models/WorkExperience';
import { WorkexperienceService } from '../../services/workexperience.service';
import { Profile } from '../../models/Profile';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit{
  user: any;
  isEditMode = false;
  isEditSummary=false;
  isFormVisible = false;
  isEditQualification = false;
  isEditworkexperience = false;
  isDescriptionEditMode =  false;
  skillSection:any='';
  profilename:any='';
  skill:Skill[]=[];
  selectedSkills: string[] = [];
  qualification:Qualification[]=[]
  dropDownData:any;
  errorMessage:any;
  addedSkill:any;
  experience:WorkExperience[]=[]
  profile: Profile[]=[]
  constructor(private authService: AuthService,private profileService:ProfileService, private experienceService: WorkexperienceService) {}
  ngOnInit() {
    // const user: any = sessionStorage.getItem('jobSeekerId') ;
    // console.log(JSON.parse(user));
    // this.authService.getUserProfileById(user).subscribe((data: any[]) => {
    //   console.log(data);
    //   this.user = data[0];
    //   console.log(this.user[0].firstName)
    // })
    // this.getProfile();
    // this.getSkillByUser();
    this.profileService.getallskills().subscribe((res) => {
      this.skill = res;
      console.log(res);
      
    });

const jobseekerid = '6572bc4e26cf09a55761c405';
const jobseekerprofileid = '6572bc4e26cf09a55761c40b';

this.profileService.getallprofiles(jobseekerid, jobseekerprofileid).subscribe((profile: Profile) => {
  this.profile = [profile];
  console.log(profile);
  
});



    this.profileService.getAllQualifications().subscribe((res)=>{
      this.qualification=res;
    })
  }



  toggleDescriptionEditMode() {
    this.isDescriptionEditMode = !this.isDescriptionEditMode;
  }


  // updateProfile(form:NgForm) {
  //   alert(form.value.skillSection);
  //   const skillId=form.value.skillSection
  //   const skillsId=[skillId];
  //   // alert(id);
  //   this.profileService.addSkill(skillsId).subscribe(response=>{
  //     console.log(response.status)
  //   },
  //   (error: HttpErrorResponse) => {
  //     console.error('Error occurred:', error);
  //     console.log('Status:', error.status); // Access the status code
  //     if(error.status!==200){
  //       this.errorMessage="already added";
  //     }
     
  //   });
  //       this.isEditMode = false;
  //     }
      toggleEditMode() {
        this.isEditMode = !this.isEditMode;
      } 

     

      toggleFormVisibility() {
        this.isFormVisible = !this.isFormVisible;
      }
    

    
  

      toggleEditqualification(){
        this.isEditQualification = !this.isEditQualification
      }

      toggleEditsummary(){
        this. isEditSummary=!this. isEditSummary
      }


      toggleEditexperience(){
        this.isEditworkexperience = !this.isEditworkexperience
      }
      // getProfile(){
      //   this.profileService.getAllSkill().subscribe(response=>{
      //     console.log(response);
      //     this.dropDownData=response;
      //   })
      // } 
      // getSkillByUser(){
      //   this.profileService.getSkillByUser().subscribe(response=>{
      //     console.log("skills"+response);
      //     // this.addedSkill=response[0].name;
      //     // console.log(this.addedSkill[0].name)
      //   })
      // }


    
    
      deleteSkill(id: number) {
        this.profileService.deleteSkill(id).subscribe((res) => {
          if (res) {
            alert('Skill deleted');
          }
        });
      }

      addexperience(data: WorkExperience){
        this.experienceService.addWorkexperience(data).subscribe((response) => {
              this.experience = response
              if (response) {
                alert("success")
              }
            })
      }

      updateSkill(data: Profile){
        this.profileService.updateProfile(data).subscribe((response) => {
          this.profile = response
          if (response) {
            console.log("Updated");
            
          }
        })

      }

      updateQualification(data: Qualification){
        this.profileService.updateQualification(data).subscribe((response) => {
          this.qualification = response
          if (response) {
            console.log("Updated");
            
          }
        })
      }
      
}
