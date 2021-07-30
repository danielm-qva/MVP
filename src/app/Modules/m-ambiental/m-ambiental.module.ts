import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MAmbientalRoutingModule } from './m-ambiental-routing.module';
import { AdwMaterialsComponent } from './pages/WasteMaterials/adw-materials/adw-materials.component';
import { ListwMaterialsComponent } from './pages/WasteMaterials/listw-materials/listw-materials.component';

import {NgxLoadingXModule} from 'ngx-loading-x';
import {ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { AddWasteProcessComponent } from './pages/WasteProcess/add-waste-process/add-waste-process.component';
import { ListWasteProcessComponent } from './pages/WasteProcess/list-waste-process/list-waste-process.component';
import { AddeResidualsComponent } from './pages/EmanationResiduals/adde-residuals/adde-residuals.component';
import { ListeResidualsComponent } from './pages/EmanationResiduals/liste-residuals/liste-residuals.component';
@NgModule({
  declarations: [AdwMaterialsComponent, ListwMaterialsComponent, AddWasteProcessComponent, ListWasteProcessComponent, AddeResidualsComponent, ListeResidualsComponent],
  imports: [
    CommonModule,
    MAmbientalRoutingModule,
    NgxLoadingXModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MAmbientalModule { }
