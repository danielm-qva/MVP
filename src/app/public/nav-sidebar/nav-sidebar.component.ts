import { Component, OnInit , OnDestroy, ComponentRef } from '@angular/core';
import { AuthService } from '../../Services/Auth';

@Component({
  selector: 'app-nav-sidebar',
  templateUrl: './nav-sidebar.component.html',
  styleUrls: ['./nav-sidebar.component.css']
})
export class NavSidebarComponent implements OnInit {

    email:String ;
     id:string =  "";
  constructor( public service:AuthService) { }



  ngOnInit(): void {
     this.email = localStorage.getItem("email");
        
        console.log(document.getElementById('sidebar'));
    //  setInterval(()=> {
    //        if(this.service.isAutenticar()){
    //             this.id = "sidebar"
    //        }
    //        else
    //        this.id = "close-sidebar"
    //  } , 300);
 
    //      document.getElementById('#id').hidden;

  } 

     
     

}
