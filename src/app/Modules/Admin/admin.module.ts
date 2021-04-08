import { NgModule ,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

//Component
import { ListProviderComponent } from './pages/provider/list-provider/list-provider.component';
import { AddProviderComponent } from './pages/provider/add-provider/add-provider.component';
import { ListProcessComponent } from './pages/process/list-process/list-process.component';
import { AddProcessComponent } from './pages/process/add-process/add-process.component';

import {NgxPaginationModule} from 'ngx-pagination' ;
import {ReactiveFormsModule , FormsModule} from '@angular/forms' ;

import { NgxLoadingXModule } from 'ngx-loading-x';
import { AddProviderProcessComponent } from './pages/provider/add-provider-process/add-provider-process.component'
 



@NgModule({
  declarations: [ListProviderComponent, AddProviderComponent, ListProcessComponent, AddProcessComponent, AddProviderProcessComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    NgxLoadingXModule
  ],
})
export class AdminModule { }
