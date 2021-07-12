import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddAFTangibleComponent } from './pages/ActivoFijos-Tangibles/add-aftangible/add-aftangible.component';
import { ListAFTangibleComponent } from './pages/ActivoFijos-Tangibles/list-aftangible/list-aftangible.component';

const routes: Routes = [
  { path: '', children : [
      {path : 'addAFtangible' , component : AddAFTangibleComponent},
      {path :  'listAFtangible' , component : ListAFTangibleComponent}
  ] }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MInfraestructuraRoutingModule { }
