import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { AddResumeComponent } from './components/add-resume/add-resume.component';
import { AppliedJobsComponent } from '../jobs/components/applied-jobs/applied-jobs.component';

const routes: Routes = [
  {
    path:'profile',component:ProfileInfoComponent
  },
  {
    path:'upload-resume',component:AddResumeComponent
  },
  {
    path:'appliedJobs',component:AppliedJobsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
