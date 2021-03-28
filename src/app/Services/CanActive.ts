import { Injectable } from '@angular/core';
import {Router , 
    ActivatedRouteSnapshot ,
     RouterStateSnapshot,
     CanActivate  } from '@angular/router' ;
      import {AuthService}  from './Auth';


@Injectable({
    providedIn: 'root'
})

export class AuhtCantActive implements CanActivate {

     constructor(private router: Router , private _serviceAuth:AuthService) {
      }

    canActivate(){
         if(this._serviceAuth.isAutenticar())
          return true ;
          else{
            this.router.navigate(['/auth/login']);
            return false ;
          }        
    }
}