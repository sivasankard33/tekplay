import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {CommentsComponent} from './Complints/comments.component';
import {UsercommentComponent} from './usercomments/usercomment.component'
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"SignUp",
    component:SignupComponent
  },
  {
    path:"comments",
    component:CommentsComponent
  },
  {
    path:"usercomments",
    component:UsercommentComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
