import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavSidebarComponent } from './public/nav-sidebar/nav-sidebar.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgxLoadingXModule } from 'ngx-loading-x';

//Services
import { AuthService } from './Services/Auth';
import { ProductService } from './Services/ProductServices';
import { ProvedorService } from './Services/PovedorServices';

import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './public/navbar/navbar.component';
import { HomComponent } from './public/hom/hom.component';


//redux 
import { StoreModule } from '@ngrx/store';


import { ToastrModule } from 'ngx-toastr';

import { ModalReducer } from './Redux/Modal/modal.reducer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


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
    NgxLoadingXModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    StoreModule.forRoot({ lista: ModalReducer }),
    NgbModule
  ],
  providers: [AuthService, ProductService, ProvedorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
