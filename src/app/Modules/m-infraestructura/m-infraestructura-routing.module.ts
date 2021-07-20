import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AddAFTangibleComponent } from './pages/ActivoFijos-Tangibles/add-aftangible/add-aftangible.component';
import { ListAFTangibleComponent } from './pages/ActivoFijos-Tangibles/list-aftangible/list-aftangible.component';
import { UpdateActivoFTComponent } from './pages/ActivoFijos-Tangibles/update-activo-ft/update-activo-ft.component';
import { AddmetrologiaComponent } from './pages/Metrologia/addmetrologia/addmetrologia.component';
import { DetalleMetrologiaComponent } from './pages/Metrologia/detalle-metrologia/detalle-metrologia.component';
import { ListmetrologiaComponent } from './pages/Metrologia/listmetrologia/listmetrologia.component';
import { UpdateMetrologiaComponent } from './pages/Metrologia/update-metrologia/update-metrologia.component';
import { AddProteccionComponent } from './pages/Proteccion/add-proteccion/add-proteccion.component';
import { ListProteccionComponent } from './pages/Proteccion/list-proteccion/list-proteccion.component';
import { UpdateProteccionComponent } from './pages/Proteccion/update-proteccion/update-proteccion.component';
import { AddUtilsToolsComponent } from './pages/UtilsTools/add-utils-tools/add-utils-tools.component';
import { ListUtilsToolsComponent } from './pages/UtilsTools/list-utils-tools/list-utils-tools.component';
import { UpdateUtilesComponent } from './pages/UtilsTools/update-utiles/update-utiles.component';

const routes: Routes = [
  { path: '', children : [
      {path : 'addAFtangible' , component : AddAFTangibleComponent},
      {path : 'udateAFtangible/:id' , component : UpdateActivoFTComponent},
      {path :  'listAFtangible' , component : ListAFTangibleComponent},
      {path : 'AddUtilstools' , component: AddUtilsToolsComponent},
       {path : 'listUtilstools' , component:ListUtilsToolsComponent},
       {path : 'addmetrologia' , component: AddmetrologiaComponent},
       {path : 'updateMetrologia/:id' , component:UpdateMetrologiaComponent},
        {path : 'detallesMetrologia/:id' , component : DetalleMetrologiaComponent},
       {path : 'listametrologia' , component: ListmetrologiaComponent},
       {path : 'addProteccion' , component:AddProteccionComponent},
       {path : 'updateProteccion/:id' , component:UpdateProteccionComponent},
       {path : 'listProteccio' , component : ListProteccionComponent},
       {path : 'updateUtiles/:id' , component : UpdateUtilesComponent},
       {path : 'updateProteccion' , component :UpdateProteccionComponent}
  ] }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MInfraestructuraRoutingModule { }
