import { Component } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/jobs/services/job.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-resume',
  templateUrl: './add-resume.component.html',
  styleUrls: ['./add-resume.component.css']
})
export class AddResumeComponent {

  menuItems: any[] | undefined;
  fileData!: File;
  file:any;
  dropdownData: any[] = [];
  jobId:any;
  constructor(private profileService: ProfileService,private route:ActivatedRoute,private jobService:JobService,private router:Router) {

    this.route.queryParams.subscribe(params => {
      this.jobId = params['jobId'];
      // Use jobId as needed in your component logic
    });
  }

  ngOnInit(): void {

    // this.profileService.
    // this.profileService.getProfile().subscribe(items => {
    //   this.menuItems = items;
    // });
    // this.profileService.getProfile().subscribe(data=>{
    //     console.log(data);
    //     const profileId=data.id;
    //     sessionStorage.setItem('profileId',profileId)
    // })
    this.profileService.getResume().subscribe(data=>{
      console.log(data);
      this.dropdownData = data;
    })
  }

  onMenuItemSelected(event: any) {
    // Handle the selected menu item here
    console.log('Selected item ID:', event.target.value);
  }
  onSubmit(form:NgForm){
    if(form.valid) {
      alert(form.value.selectedOption+form.value.coverLetter);
      const profileId=sessionStorage.getItem('profileId');
      const profileName=form.value.profileName;
      const profileSummary=form.value.profileSummary;
      const jobSeekerId=sessionStorage.getItem('jobSeekerId');
      const title=form.value.title;
      const resume=form.value.selectedOption;
      const coverLetter=form.value.coverLetter;
      const formData = new FormData();
      formData.append('file',this.fileData);
      console.log("hai"+formData);
      // const formData.append('profilename', );
      // formData.append('cv', form.value.cv);
      console.log(profileId, profileName, profileSummary, jobSeekerId, title, this.file);
      // this.profileService.uploadCV(jobSeekerId,profileId,profileName,profileSummary,title,formData,this.file).subscribe(data=>{
      //   console.log(data);
      // });
      this.jobService.applyJob(this.jobId,resume,coverLetter).subscribe((response:any)=>{
        const statusCode = response.status;
        console.log(response.message)
        if (response && response.message === 'JobsApplied Succesfully') {
          alert("applied successfully");
          this.router.navigate(['jobseeker-home/appliedJobs']);
        }
      })
    }
  }

  getFile(event:any){
    alert("getfile ");

    if(event.target.files && event.target.files.length > 0) {
      // Fill file variable with the file content
      this.file = event.target.files[0];
    }
    // this.file= event.target.files[0]
    console.log("file"+this.file.name);
    // this.save(this.file)
  }

  onFileChange(event: any) {
    // const target = event.target as HTMLInputElement;
    // if (target.files && target.files.length) {
      
    // }
    this.fileData = event.target.files[0];
    if(event.target.files && event.target.files.length > 0) {
      // Fill file variable with the file content
      this.file = event.target.files[0];
    }

  }

}
