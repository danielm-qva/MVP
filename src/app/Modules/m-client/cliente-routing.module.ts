import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ListProductComponent } from './pages/list-product/list-product.component';


const routes: Routes = [
   {path:"" ,children:[
      {path:"addproducts" , component:AddProductComponent},
      {path:"listproducts" , component:ListProductComponent}
   ]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
