import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuhtRoutingModule } from './auht-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import {ReactiveFormsModule , FormsModule } from '@angular/forms' ;
import { NgxLoadingXModule } from 'ngx-loading-x';


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuhtRoutingModule,
    ReactiveFormsModule ,
    FormsModule,
    NgxLoadingXModule

  ]
})
export class AuhtModule { }
