import { NgModule ,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ListProviderComponent } from './pages/provider/list-provider/list-provider.component';
import { AddProviderComponent } from './pages/provider/add-provider/add-provider.component';
import { ListProcessComponent } from './pages/process/list-process/list-process.component';
import { AddProcessComponent } from './pages/process/add-process/add-process.component';

import {NgxPaginationModule} from 'ngx-pagination' ;
import {ReactiveFormsModule , FormsModule} from '@angular/forms' ;
 



@NgModule({
  declarations: [ListProviderComponent, AddProviderComponent, ListProcessComponent, AddProcessComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AdminModule { }
