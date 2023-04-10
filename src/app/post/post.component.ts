import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Ipost } from 'Shared Classes and types/ipost';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  kero:any=[];
  error:string='';
  
constructor(private p:PostService)
{
  this.p.GetAllNews()
  .subscribe(
  {
    next:data=>this.kero=data,
    error:e=>this.error=e
  })
}

}
