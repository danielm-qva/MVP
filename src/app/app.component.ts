import { Component } from '@angular/core';
import { AuthService } from './Services/Auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'mvp';
   
  $saber:Boolean ;
   
constructor(public service:AuthService){

}



}
