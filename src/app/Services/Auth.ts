import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpHeaders} from '@angular/common/http';
import { User } from '../Models/User';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private URL = 'https://mvp-api-jc.herokuapp.com/api/';
 
    public header = {
        "Content-Type": "application/json"
      };
    
        constructor(private _router:Router  , private http:HttpClient){

            }
         

    isAutenticar(){
     return true ? (localStorage.getItem('token') != null && localStorage.getItem('email') != null) : false;
      }


    Autenticar(email:String  , token:String ){
         localStorage['email'] = email;
         localStorage['token'] = token;
        
          this._router.navigateByUrl('/home')
    }

    logout(){
         localStorage.clear();
         this._router.navigateByUrl('/home');
    }

    //get Token
     loggin(user:User){
       return  this.http.post(this.URL+'users/login' , {"email":user.email , "password":user.pass} , {headers:this.header}); 
     }


}