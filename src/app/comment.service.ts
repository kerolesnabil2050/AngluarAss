import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  id:any;
  constructor(private http:HttpClient,private ac:ActivatedRoute) 
  {
  this.ac.paramMap.subscribe(param=>{
    this.id=param.get("id");
  })
}
    GetAllComment():Observable<any>
    {
     return this.http.get(`https://jsonplaceholder.typicode.com/posts/${this.id}/comments`);
 
  }
}
