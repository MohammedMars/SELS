import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Result } from 'src/app/models/enums';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public error: string = '';
  public form: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService) {

  }
  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
      mobileNumber: new FormControl(''),
    });
  }

  public async signup() {
    try {
      if (this.form.valid) {
        const tPassword: string = this.form.controls['password'].value;
        const tConfirmPassword: string = this.form.controls['confirmPassword'].value;
        if (tPassword === tConfirmPassword) {
          const tEmail: string = this.form.controls['email'].value;
          const tUser: User = new User();
          tUser.FullName = '';
          tUser.Email = tEmail;
          tUser.Email = tEmail;
          tUser.Password = tPassword;
          tUser.MobileNumber = this.form.controls['mobileNumber'].value;
          const tResult: Result = await this.authenticationService.SignUp(tUser);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
}
