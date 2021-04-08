import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Component
import { AddProviderComponent } from './pages/provider/add-provider/add-provider.component';
import { ListProviderComponent } from './pages/provider/list-provider/list-provider.component';
import { AddProcessComponent } from './pages/process/add-process/add-process.component';
import { ListProcessComponent } from './pages/process/list-process/list-process.component';
import { AddProviderProcessComponent } from './pages/provider/add-provider-process/add-provider-process.component';


const routes: Routes = [
 
   {path:'provider' ,children:[
       {path:'addProvider' ,component:AddProviderComponent},
       {path:'listProvider' , component:ListProviderComponent}
   ]},
    {
        path:'process' ,children:[
          {path:'addProcess' , component:AddProcessComponent},
           {path:'listProcess' , component:ListProcessComponent}
        ]
    },
    {path : 'proces_provider' , component:AddProviderProcessComponent}
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
