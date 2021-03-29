import { NgModule  , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavSidebarComponent } from './public/nav-sidebar/nav-sidebar.component';

import {ReactiveFormsModule , FormsModule } from '@angular/forms' ;

import { NgxSpinnerModule } from "ngx-spinner";

//Services
import {AuthService} from './Services/Auth';
import { ProductService  } from './Services/ProductServices';

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
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
     BrowserAnimationsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AuthService , ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
