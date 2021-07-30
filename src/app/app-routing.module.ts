import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AuhtCantActive } from './././Services/CanActive';
import { HomComponent } from './public/hom/hom.component';
import { LoginComponent } from './Modules/auht/pages/login/login.component';




const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./Modules/auht/auht.module').then(m => m.AuhtModule) },
  { path: "mconocimiento", canActivate: [AuhtCantActive], loadChildren: () => import('./Modules/m-conocimiento/m-conocimiento.module').then(m => m.MConocimientoModule) },
  { path: 'admin', canActivate: [AuhtCantActive], loadChildren: () => import('./Modules/Admin/admin.module').then(m => m.AdminModule) },
  { path: 'products', canActivate: [AuhtCantActive], loadChildren: () => import('./Modules/m-client/m-client.module').then(m => m.MClientModule) },
  { path: 'home', component: HomComponent },
  { path: '', component: LoginComponent , pathMatch : 'full' },
  { path: 'infraes',canActivate:[AuhtCantActive] , loadChildren: () => import('./Modules/m-infraestructura/m-infraestructura.module').then(m => m.MInfraestructuraModule) },
   {path : 'mambietal' ,canActivate:[AuhtCantActive] , loadChildren: () => import('./Modules/m-ambiental/m-ambiental.module').then(m => m.MAmbientalModule)},
  { path: "**", canActivate: [AuhtCantActive], component: HomComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
