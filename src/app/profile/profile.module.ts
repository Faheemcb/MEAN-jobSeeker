import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SharedModule } from "../shared/shared.module";
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';
import { AddResumeComponent } from './components/add-resume/add-resume.component';



@NgModule({
    declarations: [
        ProfileComponent,
        ProfileInfoComponent,
        AddResumeComponent,
       
    ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        SharedModule
    ]
})
export class ProfileModule { }
