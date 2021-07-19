import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MInfraestructuraRoutingModule } from './m-infraestructura-routing.module';

import { AddAFTangibleComponent } from './pages/ActivoFijos-Tangibles/add-aftangible/add-aftangible.component';
import { ListAFTangibleComponent } from './pages/ActivoFijos-Tangibles/list-aftangible/list-aftangible.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import {NgxLoadingXModule} from 'ngx-loading-x';
import {ToastrModule} from 'ngx-toastr';
import { AddUtilsToolsComponent } from './pages/UtilsTools/add-utils-tools/add-utils-tools.component';
import { ListUtilsToolsComponent } from './pages/UtilsTools/list-utils-tools/list-utils-tools.component';
import { AddmetrologiaComponent } from './pages/Metrologia/addmetrologia/addmetrologia.component';
import { ListmetrologiaComponent } from './pages/Metrologia/listmetrologia/listmetrologia.component';
import { AddProteccionComponent } from './pages/Proteccion/add-proteccion/add-proteccion.component';
import { ListProteccionComponent } from './pages/Proteccion/list-proteccion/list-proteccion.component';
import { UpdateProteccionComponent } from './pages/Proteccion/update-proteccion/update-proteccion.component';



@NgModule({
  declarations: [ AddAFTangibleComponent, ListAFTangibleComponent, AddUtilsToolsComponent, ListUtilsToolsComponent, AddmetrologiaComponent, ListmetrologiaComponent, AddProteccionComponent, ListProteccionComponent, UpdateProteccionComponent],
  imports: [
    CommonModule,
    MInfraestructuraRoutingModule,
    NgxLoadingXModule,
    ToastrModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MInfraestructuraModule { }
