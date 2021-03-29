import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { ClienteRoutingModule } from "./cliente-routing.module";
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ListProductComponent } from './pages/list-product/list-product.component';

 import {NgxPaginationModule} from 'ngx-pagination'
 
 import { FormsModule , ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddProductComponent, ListProductComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule,
    ReactiveFormsModule,NgxPaginationModule
  ]
})
export class MClientModule { }
