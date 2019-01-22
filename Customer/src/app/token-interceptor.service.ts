import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import { SignupService} from './signup.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor( private injector :Injector) { }

  intercept(req,next){
    let tokenservice = this.injector.get(SignupService)
    let tokenizedreq = req.clone({
      setHeaders:{
        Authorization:`Berrer ${tokenservice.gettoken()}`
      }
    })

      return next.handle(tokenizedreq)
  }
}
