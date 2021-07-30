import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddeResidualsComponent } from './pages/EmanationResiduals/adde-residuals/adde-residuals.component';
import { ListeResidualsComponent } from './pages/EmanationResiduals/liste-residuals/liste-residuals.component';
import { AdwMaterialsComponent } from './pages/WasteMaterials/adw-materials/adw-materials.component';
import { ListwMaterialsComponent } from './pages/WasteMaterials/listw-materials/listw-materials.component';
import { AddWasteProcessComponent } from './pages/WasteProcess/add-waste-process/add-waste-process.component';
import { ListWasteProcessComponent } from './pages/WasteProcess/list-waste-process/list-waste-process.component';

const routes: Routes = [
 {path :'' , children:[
    {path:'addwMaterials' , component : AdwMaterialsComponent},
    { path : 'listwMaterials' , component : ListwMaterialsComponent},
    {path : 'addWasteProcess' , component: AddWasteProcessComponent},
     {path: 'listWasteProcess' , component : ListWasteProcessComponent},
      {path : 'addeResiduals' , component : AddeResidualsComponent} ,
      {path : 'listResiduals' , component: ListeResidualsComponent}
 ]
 } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MAmbientalRoutingModule { }
