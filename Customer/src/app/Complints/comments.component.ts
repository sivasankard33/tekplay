import { Component, OnInit } from '@angular/core';
import{ SignupService}from '../signup.service'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

   usercomplaints={}  
  constructor( private complaintservice :SignupService) { }

  ngOnInit() {
  }

usercomplaint(){
//  console.log(this.usercomplaints)

this.complaintservice.complaintuser(this.usercomplaints).subscribe(
  res =>{
    console.log(res)
    
  },
  err =>console.log(err)
)
}

}
