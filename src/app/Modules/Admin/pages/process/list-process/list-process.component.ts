import { Component, OnInit } from '@angular/core';
import { ProcessServices } from '../../../../../Services/ProcessServices';
import { Process } from '../../../../../Models/process';
import { Router } from '@angular/router';


import  { ToastrService } from 'ngx-toastr';

declare const modalmenssage: any;

@Component({
   selector: 'app-list-process',
   templateUrl: './list-process.component.html',
   styleUrls: ['./list-process.component.css']
})
export class ListProcessComponent implements OnInit {

   isActivar: boolean;
   pages: number = 1;
   list: Process[] = [];
   process: Process = new Process;
   activa: boolean = true;

   constructor(private service: ProcessServices, private _route: Router , private toast:ToastrService) { }

   ngOnInit() {
      this.isActivar = true;
      this.getAllProcess();
   }


   isAcitve() {
      return (this.list.length == 0) ? true : false;
   }


   getAllProcess() {
      this.service.getAllProcess().subscribe((res: any) => {
         this.list = res.data;
         setTimeout(() => {
            this.isActivar = false;
         }, 800);

      }, error => {
         modalmenssage("Ha ocurrido un error al recuperar los datos...");
         this._route.navigateByUrl('/home');
      })

   }


   delete_id(id: string) {
      this.isActivar = true ;
      this.service.deleteProcess(id).subscribe(res => {
          this.shoowMessas();
         this.getAllProcess();
      }, error => {
         this.showwFali();
         setTimeout(() => {
            this.isActivar = false;
         }, 800);

       
      });
   }


   lengtProductoArrays() {
      return (this.list.length == 0) ? true : false;
   }


   shoowMessas() {
      this.toast.success('Has Eliminado un Proceso', 'Boots MVP', {
        timeOut: 2000
      })
    }
  
    showwFali() {
      this.toast.error('Ha ocurrido un error al eliminar el Proceso..... Intentelo una vez mas....', 'Boots MVP', {
        timeOut: 2000
      })
    }



}
