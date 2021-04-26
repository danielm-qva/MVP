import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MConocimService {


  private URL = 'https://mvp-api-jc.herokuapp.com/api/';

  public header = {
    "authorization": 'Bearer ' + localStorage.getItem('token'),
    "Content-Type": "application/json",
  }

  constructor(public http: HttpClient) {

  }


  //INOVACION
  //get
  GetInovacion(): Observable<Object[]> {
    return this.http.get<Object[]>(this.URL + 'innovation_projects', { headers: this.header });
  }
  //delete
  DeleteInovacion(id: string) {
    return this.http.delete(this.URL + 'innovation_projects/' + id, { headers: this.header });
  }
  //add
  AddInovacion(data: Object) {
    return this.http.post(this.URL + 'innovation_projects', data, { headers: this.header });
  }
  GetOneInvacion(id: string) {
    return this.http.get(this.URL + 'innovation_projects/' + id, { headers: this.header });
  }
  UpdateInvacion(id: string, data: Object) {
    return this.http.put(this.URL + 'innovation_projects/' + id, data, { headers: this.header });
  }

}
