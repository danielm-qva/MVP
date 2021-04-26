import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MConocimientoRoutingModule } from './m-conocimiento-routing.module';
import { AddInovacionComponent } from './pages/Inovacion/add-inovacion/add-inovacion.component';
import { ListInovacionComponent } from './pages/Inovacion/list-inovacion/list-inovacion.component';
import { UpdateInovacionComponent } from './pages/Inovacion/update-inovacion/update-inovacion.component';

import {ReactiveFormsModule , FormsModule} from '@angular/forms' 

 import {ToastrModule} from 'ngx-toastr';
 import {NgxLoadingXModule} from 'ngx-loading-x';

@NgModule({
  declarations: [ AddInovacionComponent, ListInovacionComponent, UpdateInovacionComponent],
  imports: [
    CommonModule,
    MConocimientoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule,
    NgxLoadingXModule
  ]
})
export class MConocimientoModule { }
