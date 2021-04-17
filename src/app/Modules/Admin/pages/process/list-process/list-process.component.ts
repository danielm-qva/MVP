import { Component, OnInit } from '@angular/core';
import { ProcessServices } from '../../../../../Services/ProcessServices';
import { Process } from '../../../../../Models/process';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ToastrService } from 'ngx-toastr';

declare const ModalProvider_Process: any;

@Component({
   selector: 'app-list-process',
   templateUrl: './list-process.component.html',
   styleUrls: ['./list-process.component.css']
})
export class ListProcessComponent implements OnInit {

   isActivar: boolean;
   listProvedor: Object[] = [];
   pages: number = 1;
   list: Process[] = [];
   process: Process = new Process;
   activa: boolean = true;


   
   constructor(private service: ProcessServices, private _route: Router, private toast: ToastrService, private modalService: NgbModal) { }

   ngOnInit() {
      this.isActivar = true;
      this.getAllProcess();
   }


   isAcitve() {
      return (this.list.length == 0) ? true : false;
   }


   getAllProcess() {
      this.service.getAllProcess().subscribe( (res: any) => {
         this.list = res.data;

         setTimeout(() => {
            this.isActivar = false;
         }, 800);

      }, error => {
         this.showwFali();
         this._route.navigateByUrl('/home');
      })

   }



  async  Obtener_Provedor(id: string, name: string , longContent ) {
         this.isActivar = true ;
         console.log(name);
          
      await this.service.getProvedor_Process(id).subscribe((res: any) => {
             console.log(res.data);
              res.data.map( data => { 
                  console.log(data.process.name);
                      if(data.process.name == name){
                          this.listProvedor.push({"data" : data.provider , "good": data.goods_type , "sumi": data.number_supplies_year , 
                             "tonelada" : data.tons_by_supplies , "modeTran": data.transportation_mode });
                      }
                     
              })
                
          console.log(this.listProvedor);

          setTimeout(()=>{
            this.isActivar=false ;
       }, 1000);

         });

     
         this.modalService.open(longContent);
         this.listProvedor = [] ;
   }




   delete_id(id: string) {
      this.isActivar = true;
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
      this.toast.error('Ha ocurrido un error..... Intentelo una vez mas....', 'Boots MVP', {
         timeOut: 2000
      })
   }



}
