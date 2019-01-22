import { Component, OnInit } from '@angular/core';
import{ SignupService } from '../signup.service';
import {FormsModule}from '@angular/forms';
import{ Router }from '@angular/router'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private signup :SignupService,private router:Router) { }

  registerdata ={}

  ngOnInit() {
  }

  registersdata(){

    this.signup.registeruserservice(this.registerdata).subscribe(
      res =>{
        console.log(res)
        localStorage.setItem('token',res.token)
        this.router.navigate(['/usercomments'])
      },
      err =>console.log(err)
    )
    
  }

}
