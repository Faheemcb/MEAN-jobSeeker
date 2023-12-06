import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})

export class SetPasswordComponent {
  // user = {
  //   password: '',
  //   confirmPassword: '',
  // };

  // submitForm(form: any) {
  //   if (form.valid) {
  //     // Form is valid, you can perform further actions here
  //     console.log('Form submitted:', this.user);
  //   }
  // }
 
  user = {
    password: '',
    confirmPassword: '',
  };
  signupId:any;
  
  passwordMismatch = false; // Add a flag to track password mismatch
  emailVerified: boolean = false;
  constructor(private authService: AuthService,private route: ActivatedRoute,private router:Router) {
    this.route.queryParams.subscribe(params => {
     this. signupId = params['signupid'];
      // You now have the signupId and can use it for further processing.
      console.log('Signup ID:', this.signupId);
      this.authService.verifyEmail(this.signupId).subscribe((response:any)=>{
        this.emailVerified=true;
        console.log(response);
        const statusCode = response.status;
        console.log('Status code:');
        if(statusCode === 200){
          this.emailVerified=true;
        }
        else{
          this.emailVerified=false;
        }
      })

    });  
  }
ngOnInit(){
  }

  submitForm(form: any) {
    if (form.valid) {
      if (this.user.password !== this.user.confirmPassword) {
        // Passwords do not match
        this.passwordMismatch = true;
      } else {
        // Passwords match, reset the flag
        this.passwordMismatch = false;

        // Form is valid, you can perform further actions here
        console.log('Form submitted:', this.user);

        // Call the setNewPassword method without userId
        this.authService.setNewPassword(this.user.password,this.signupId).subscribe((response:HttpResponse<string>) => {
          
          const statusCode = response.status;
          // console.log(statusCode);
          console.log(`Status Code: ${statusCode}`);
          console.log(response);
          if(statusCode === 200){
           this.router.navigate(['/login'],{ relativeTo: this.route })
          }

          else{
            this.router.navigate(['/set-password'],{ relativeTo: this.route })
          }
          // Handle the response from the API
          
        });
      }
    }
  }
}
