import { Component } from '@angular/core';
import { SignupService} from './signup.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Customer';

  constructor( private _authservice :SignupService){

  }
}
