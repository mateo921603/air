import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuhtService } from '../auht.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private userService:AuhtService,
    private router:Router,
    private fb:FormBuilder
    ){}

  formUser = this.fb.group({
    'email': ['',[
      Validators.required,
      Validators.email
    ]],

    'password': ['',[
      Validators.required,
    ]]
  });

  get email(){
    return this.formUser.get('email') as FormControl;
  }

  get password(){
    return this.formUser.get('password') as FormControl;
  }
 

  login(){
    this.userService.login(this.formUser.value)
    .then(Response => {
      console.log(Response);
      this.router.navigate(['/']);
    })
    .catch(error => {
      console.log(error);
    });
    
  }

  loginGoogle(){
    this.userService.loginWhitGoogle()
    .then((Response) => {
      console.log(Response);
      this.router.navigate(['/']);
    })
    .catch((error) =>{
      console.log(error);
    })
  }
}
