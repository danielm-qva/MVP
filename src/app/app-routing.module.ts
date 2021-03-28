import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { AuhtCantActive } from './././Services/CanActive';
import { HomComponent } from './public/hom/hom.component';




const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./Modules/auht/auht.module').then(m => m.AuhtModule) },
  { path: 'admin', canActivate: [AuhtCantActive], loadChildren: () => import('./Modules/Admin/admin.module').then(m => m.AdminModule) } ,
   {path: 'products' ,canActivate :[ AuhtCantActive ] , loadChildren: () => import('./Modules/m-client/m-client.module').then(m => m.MClientModule)},
  {path:'home'  ,component:HomComponent},
   {path:'' , component:HomComponent},
    {path:"**" , canActivate:[AuhtCantActive] , component:HomComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
