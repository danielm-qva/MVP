import { NgModule, Input } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componet
import { AddInovacionComponent } from './pages/Inovacion/add-inovacion/add-inovacion.component';
import { ListInovacionComponent } from './pages/Inovacion/list-inovacion/list-inovacion.component';
import { UpdateInovacionComponent } from './pages/Inovacion/update-inovacion/update-inovacion.component';


const routes: Routes = [
    {path:"" , children:[
     {path:"addinovacion" , component:AddInovacionComponent},
      {path:"listinovacion" , component:ListInovacionComponent},
      {path:"updateinovacion/:id" , component:UpdateInovacionComponent}
    ]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MConocimientoRoutingModule { }
