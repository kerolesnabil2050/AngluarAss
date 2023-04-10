import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  error:string='';
  
  RegisterForm=new FormGroup(
    {
  userName: new FormControl(null,[Validators.required]),
  email: new FormControl(null,[Validators.email,Validators.required]),
  password: new FormControl(null,Validators.required)
    }
  )

 
}
