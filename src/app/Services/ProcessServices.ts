import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Process } from '../Models/process';
import { Observable } from 'rxjs';
import { Provider } from '../Models/provider';


@Injectable({
    providedIn: 'root'
})


export class ProcessServices {

    private URL = 'https://mvp-api-jc.herokuapp.com/api/';

    public header = {
        "authorization": 'Bearer ' + localStorage.getItem('token'),
        "Content-Type": "application/json",
    }

    constructor(private _http: HttpClient) {

    }


    getAllProcess(): Observable<Process[]> {
        return this._http.get<Process[]>(this.URL + 'processes', { headers: this.header });
    }

    getAddProcess(process: Process) {
        return this._http.post<Process>(this.URL + 'processes', { "process": { "name": process.name, "description": process.description } }, { headers: this.header });
    }

    deleteProcess(id: string) {
        return this._http.delete(this.URL + 'processes/' + id, { headers: this.header });
    }

    AddProvider_Process(a: Object) {
        return this._http.post(this.URL + 'processes/add_provider', { "process_provider": a }, { headers: this.header });
    }

    getProvedor_Process(id:string):Observable<Provider[]>{
        return this._http.get<Provider[]>(this.URL+'processes/'+id+'/providers' , {headers:this.header});
    }
  
      
 


}