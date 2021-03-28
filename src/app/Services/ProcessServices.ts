import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Process } from '../Models/process';

@Injectable({
    providedIn: 'root'
})


export class ProcessServices {

    private URL = 'https://mvp-api-jc.herokuapp.com/api/';
    
     public header= {
        "authorization": 'Bearer ' + localStorage.getItem('token'),
        "Content-Type": "application/json",
     }
        
    constructor(private _http:HttpClient ){

    }

   
     getAllProcess(){
          return this._http.get<Process[]>(this.URL+'processes',{headers:this.header});
     }

      getAddProcess(process:Process){
          return this._http.post<Process>(this.URL+'processes' ,{"process":{"name":process.name , "description":process.description}},{headers:this.header}) ;
      }
       

}