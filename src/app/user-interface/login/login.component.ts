import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Result } from 'src/app/models/enums';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public error: string = '';
  public form: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService) {

  }
  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  public async login() {
    try {
      if (this.form.valid) {
        const tUsername: string = this.form.controls['username'].value;
        const tPassword: string = this.form.controls['password'].value;
        const tResult: Result = await this.authenticationService.Login(tUsername, tPassword);
        if(tResult === Result.SUCCESS){
          alert('Logged In');
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

}
