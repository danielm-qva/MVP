import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Provider } from '../Models/provider';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProvedorService {

    private URL = 'https://mvp-api-jc.herokuapp.com/api/';

    public header = {
        "authorization": 'Bearer ' + localStorage.getItem('token'),
        "Content-Type": "application/json",
    }

    constructor(private _http: HttpClient) {

    }


    IsertProvedor(provedor: Provider) {
        return this._http.post<Provider>(this.URL + 'admin/providers', {
            "provider":{
                "name": provedor.name,
                "distance_km": provedor.distance_km ,
                "location": provedor.location
            }
         } , { headers: this.header });

    }

    getAllProvider():Observable<Provider[]>{
        return this._http.get<Provider[]>(this.URL + 'admin/providers' , {headers:this.header}) ;
    }

    deleteProvider(id:string){
            return this._http.delete(this.URL +'admin/providers/'+id , {headers:this.header});
    }
    
}