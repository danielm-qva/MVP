import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Component
import { AddProviderComponent } from './pages/provider/add-provider/add-provider.component';
import { ListProviderComponent } from './pages/provider/list-provider/list-provider.component';
import { AddProcessComponent } from './pages/process/add-process/add-process.component';
import { ListProcessComponent } from './pages/process/list-process/list-process.component';
import { AddProviderProcessComponent } from './pages/provider/add-provider-process/add-provider-process.component';
import { ListProvProcessComponent } from './pages/process/list-prov-process/list-prov-process.component';
import { EnvaProvedorComponent } from './pages/provider/enva-provedor/enva-provedor.component';
import { ListEvaluatProveComponent } from './pages/provider/list-evaluat-prove/list-evaluat-prove.component';

const routes: Routes = [

  {
    path: 'provider', children: [
      { path: 'addProvider', component: AddProviderComponent },
      { path: 'listProvider', component: ListProviderComponent },
      {path:'evaProvider' , component:EnvaProvedorComponent} ,
       {path:'list_provi_evalua' , component:ListEvaluatProveComponent}
    ]
  },
  {
    path: 'process', children: [
      { path: 'addProcess', component: AddProcessComponent },
      { path: 'listProcess', component: ListProcessComponent },
      { path: 'listProvProcess', component: ListProvProcessComponent }
    ]
  },
  { path: 'proces_provider', component: AddProviderProcessComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
