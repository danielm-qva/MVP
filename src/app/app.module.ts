import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavSidebarComponent } from './public/nav-sidebar/nav-sidebar.component';

import {ReactiveFormsModule , FormsModule } from '@angular/forms' ;

//Services
import {AuthService} from './Services/Auth';
import { ClienteService }  from  './Services/ProductServices';

import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './public/navbar/navbar.component';
import { HomComponent } from './public/hom/hom.component';



@NgModule({
  declarations: [
    AppComponent,
    NavSidebarComponent,
    NavbarComponent,
    HomComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService , ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
