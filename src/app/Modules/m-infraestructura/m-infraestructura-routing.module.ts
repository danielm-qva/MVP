import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AddAFTangibleComponent } from './pages/ActivoFijos-Tangibles/add-aftangible/add-aftangible.component';
import { ListAFTangibleComponent } from './pages/ActivoFijos-Tangibles/list-aftangible/list-aftangible.component';
import { AddmetrologiaComponent } from './pages/Metrologia/addmetrologia/addmetrologia.component';
import { ListmetrologiaComponent } from './pages/Metrologia/listmetrologia/listmetrologia.component';
import { AddProteccionComponent } from './pages/Proteccion/add-proteccion/add-proteccion.component';
import { ListProteccionComponent } from './pages/Proteccion/list-proteccion/list-proteccion.component';
import { UpdateProteccionComponent } from './pages/Proteccion/update-proteccion/update-proteccion.component';
import { AddUtilsToolsComponent } from './pages/UtilsTools/add-utils-tools/add-utils-tools.component';
import { ListUtilsToolsComponent } from './pages/UtilsTools/list-utils-tools/list-utils-tools.component';

const routes: Routes = [
  { path: '', children : [
      {path : 'addAFtangible' , component : AddAFTangibleComponent},
      {path :  'listAFtangible' , component : ListAFTangibleComponent},
      {path : 'AddUtilstools' , component: AddUtilsToolsComponent},
       {path : 'listUtilstools' , component:ListUtilsToolsComponent},
       {path : 'addmetrologia' , component: AddmetrologiaComponent},
       {path : 'listametrologia' , component: ListmetrologiaComponent},
       {path : 'addProteccion' , component:AddProteccionComponent},
       {path : 'listProteccio' , component : ListProteccionComponent},
       {path : 'updateProteccion' , component :UpdateProteccionComponent}
  ] }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MInfraestructuraRoutingModule { }
