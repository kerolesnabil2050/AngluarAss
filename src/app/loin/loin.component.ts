import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loin',
  templateUrl: './loin.component.html',
  styleUrls: ['./loin.component.scss']
})
export class LoinComponent {
  loginform=new FormGroup(
    {
    userName: new FormControl(null,[Validators.required]),
    password: new FormControl(null,Validators.required)
    })
}
