import { Component, OnInit } from '@angular/core';
import { SignupService} from '../signup.service';
import{FormsModule} from'@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginuserdata = {};
  constructor( private login :SignupService,private router :Router) { }

  ngOnInit() {
  }

  userlogin(){
    this.login.loginuserservice(this.loginuserdata).subscribe(
      res=>{
        console.log(res)
        localStorage.setItem('token',res.token)
        this.router.navigate(['/usercomments'])
      },
      err=>console.log(err)
    )
    // console.log(this.loginuserdata)
  }




}
