import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddAFTangibleComponent } from './pages/ActivoFijos-Tangibles/add-aftangible/add-aftangible.component';
import { ListAFTangibleComponent } from './pages/ActivoFijos-Tangibles/list-aftangible/list-aftangible.component';
import { AddUtilsToolsComponent } from './pages/UtilsTools/add-utils-tools/add-utils-tools.component';
import { ListUtilsToolsComponent } from './pages/UtilsTools/list-utils-tools/list-utils-tools.component';

const routes: Routes = [
  { path: '', children : [
      {path : 'addAFtangible' , component : AddAFTangibleComponent},
      {path :  'listAFtangible' , component : ListAFTangibleComponent},
      {path : 'AddUtilstools' , component: AddUtilsToolsComponent},
       {path : 'listUtilstools' , component:ListUtilsToolsComponent}
  ] }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MInfraestructuraRoutingModule { }
