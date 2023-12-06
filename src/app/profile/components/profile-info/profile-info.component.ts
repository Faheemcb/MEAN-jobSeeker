import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service'
import {Skill} from '../../models/skill'

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})

export class ProfileInfoComponent implements OnInit{
  
  skill:Skill[]=[];
  constructor(private skillService: ProfileService) {}
  ngOnInit() {
    this.skillService.getallskills().subscribe((res) => {
      this.skill=res
    });   
}
deleteSkill(id: number) {
  this.skillService.deleteSkill(id).subscribe((res) => {
    if (res) {
      alert('Skill deleted');
    }
  });
}
}
