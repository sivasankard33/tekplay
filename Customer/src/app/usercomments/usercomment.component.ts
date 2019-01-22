import { Component, OnInit } from '@angular/core';
import{ SignupService}from '../signup.service'
import { HttpErrorResponse } from '@angular/common/http';
import {Router} from '@angular/router'

@Component({
  selector: 'app-usercomment',
  templateUrl: './usercomment.component.html',
  styleUrls: ['./usercomment.component.css']
})
export class UsercommentComponent implements OnInit {

  
  complaints =<any>[];
  constructor( private usercomplaints :SignupService,private _router :Router) { }

  ngOnInit() {

     this.usercomplaints.getcomplaintsdata().subscribe(
       responsedata =>this.complaints= responsedata,
       error =>{
        console.log(error) }
      );
  }


}
