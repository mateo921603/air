import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuhtService } from '../auht.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(
    private userService:AuhtService,
    private router:Router,
    private fb:FormBuilder
  ){}

  formRegit = this.fb.group({
    'email': ['',[
      Validators.required,
      Validators.email
    ]],

    'password': ['',[
      Validators.required,
    ]]

  });

  get email(){
    return this.formRegit.get('email') as FormControl;
  }

  get password(){
    return this.formRegit.get('password') as FormControl;
  }


  register(){
    this.userService.register(this.formRegit.value)
    .then(Response => {
      console.log(Response);
      this.router.navigate(['user'])
    })
    .catch(error => console.log(error));
    console.log(console.error()
    );
  }
}
