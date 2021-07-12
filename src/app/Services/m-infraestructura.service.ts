import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
  

@Injectable({
  providedIn: 'root'
})
export class MInfraestructuraService {


    private URL  =  environment.URL ;

  constructor(public http:HttpClient) { }
   
  public header = {
    "authorization": 'Bearer ' + localStorage.getItem('token'),
    "Content-Type": "application/json",
}


 
   //Activo Fijo Tangible
  
    //Get All
    getAll():Observable<Object[]>{
    return this.http.get<Object[]>(this.URL + 'admin/tangible_fixed_assets' , {headers : this.header});
    }
    //Post
    AddAFtangible(data:Object){
    
       return this.http.post(this.URL + 'admin/tangible_fixed_assets' , data, {headers : this.header});
    } 
     //delete
     DeleteAFtangible(id:string){
       return this.http.delete(this.URL + 'admin/tangible_fixed_assets/'+ id , {headers : this.header});
     }



}
