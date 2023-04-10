import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ipost } from 'Shared Classes and types/ipost';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private myhttp:HttpClient) { }
  GetAllNews():Observable<Ipost>
   {
    return this.myhttp.get<Ipost>(`https://jsonplaceholder.typicode.com/posts`);
}}
