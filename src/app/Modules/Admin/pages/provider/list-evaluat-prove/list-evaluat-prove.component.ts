import { Component, OnInit } from '@angular/core';
import { ProvedorService } from '../../../../../Services/PovedorServices';
import { ProductService } from '../../../../../Services/ProductServices';
import { ProcessServices } from '../../../../../Services/ProcessServices';

import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-list-evaluat-prove',
  templateUrl: './list-evaluat-prove.component.html',
  styleUrls: ['./list-evaluat-prove.component.css']
})
export class ListEvaluatProveComponent implements OnInit {


   listaEval = [] ;
  constructor(private service:ProvedorService , private toast:ToastrService) { }

  ngOnInit(): void {
      this.getProducto();
  }

  getProducto(){
    this.service.getProvider_evalution().subscribe( (res:any) => {
      console.log(res.data);
        this.listaEval = res.data;
    })
  }



   delete(id:string){
     this.service.deleteEvaluacion(id).subscribe(res => {
            this.shoowMessas();
            this.ngOnInit();
     } , error => {
          this.showwFali();
     })
   }

      

   shoowMessas() {
    this.toast.success('Has Eliminado un Proceso', 'Boots MVP', {
       timeOut: 2000
    })
 }

 showwFali() {
    this.toast.error('Ha ocurrido un error..... Intentelo una vez mas....', 'Boots MVP', {
       timeOut: 2000
    })
 }
  


}
 