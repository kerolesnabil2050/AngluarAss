import { Component } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  user:any=[];
  error:string=''
  constructor(private p:UserService)
  {
    this.p.GetAllUser()
    .subscribe(
    {
      next:data=>this.user=data,
      error:e=>this.error=e
    })
  }
}
