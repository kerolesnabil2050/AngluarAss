import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { ErrorComponent } from './error/error.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { CommentComponent } from './comment/comment.component';
import { RegisterComponent } from './register/register.component';
import { LoinComponent } from './loin/loin.component';

const routes: Routes = 
[
  {path:"", redirectTo:"home",pathMatch:'full'},
  {path:"home",component:ParentComponent},
  {path:"product", component:ProductComponent},
  {path:"user", component:UserComponent},
  {path:"post", component:PostComponent},
  {path:"post/:id/comment", component:CommentComponent},
  {path:"register", component:RegisterComponent},
  {path:"Login",component:LoinComponent},
  {path:"**", component:ErrorComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
