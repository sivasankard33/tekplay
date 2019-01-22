import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
import{Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private registerurl ="http://localhost:3000/api/register"
  private loginusrUrl ="http://localhost:3000/api/login"
  private complaintUrl="http://localhost:4000/api/complaint"
  private getcomplaintUrl="http://localhost:4000/api/usercomplaits"

  constructor(private http:HttpClient,private router:Router) { }

  registeruserservice(user){

   return this.http.post<any>(this.registerurl,user)
  }

  loginuserservice(user){
    return this.http.post<any> (this.loginusrUrl,user)
  }

  loggedIn(){
    return !! localStorage.getItem('token')
  }

  logoutuser(){
    localStorage.removeItem('token')
    this.router.navigate(['/login']);

  }

  complaintuser(data){
   return this.http.post(this.complaintUrl,data)
  }

  getcomplaintsdata(){
   return this.http.get(this.getcomplaintUrl)
  }

  gettoken(){
    return localStorage.getItem('token')
  }

}
