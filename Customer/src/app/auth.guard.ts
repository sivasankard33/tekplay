import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import{ SignupService} from'./signup.service'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private authuser :SignupService,private router : Router){

  }
  canActivate():boolean{
    if(this.authuser.loggedIn()){
      return true;

 }else{
   this.router.navigate(['/login'])
   return false
 }
     
    
  }
}
