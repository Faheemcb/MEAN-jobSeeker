import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent {
  settingsForm! : FormGroup;

  constructor(private formBuilder: FormBuilder){}
  
  ngOnInit() {
    // Form initialization
    this.settingsForm = this.formBuilder.group({
      // Define form controls with validation rules
      firstName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required,]]
      // Add more form controls as needed
    });
  }

  

  onSubmit()
  {
    console.log("hai");
    console.log(this.settingsForm.value);
    // if (this.settingsForm.valid) {
    //   // Perform actions with the form data
    //   console.log(this.settingsForm.value);
    // } else {
    //   // Handle invalid form submission
    //   console.log('Invalid form');
    // }
  
  }

  // get f() { return this.settingsForm.controls; }

}
