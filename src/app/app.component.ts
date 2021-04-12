import { Component } from '@angular/core';
import { AuthService } from './Services/Auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'mvp';
   
   
constructor(public service:AuthService){

}



}
