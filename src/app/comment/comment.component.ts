import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../comment.service';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
id:any;
er:string=''
comments:any
constructor(private com:CommentService)
  
{

}
ngOnInit(): void {
  this.com.GetAllComment().subscribe(
    {
  next:data=>this.comments=data,
  error:errro=>this.er=errro
    })
}
 

  
}
