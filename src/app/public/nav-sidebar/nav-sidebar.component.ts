import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/Auth';
import { User } from '../../Models/User';

@Component({
  selector: 'app-nav-sidebar',
  templateUrl: './nav-sidebar.component.html',
  styleUrls: ['./nav-sidebar.component.css']
})
export class NavSidebarComponent implements OnInit {

    email:String ;
  constructor( public service:AuthService) { }

  ngOnInit(): void {
     this.email = localStorage.getItem("email");
  }

}