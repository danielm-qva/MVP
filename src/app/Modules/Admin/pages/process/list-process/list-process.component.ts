import { Component, OnInit } from '@angular/core';
import { ProcessServices } from '../../../../../Services/ProcessServices';
import { Process } from '../../../../../Models/process';
import { Router } from '@angular/router';


import { NgxSpinnerService } from "ngx-spinner";


declare const modalmenssage: any;

@Component({
   selector: 'app-list-process',
   templateUrl: './list-process.component.html',
   styleUrls: ['./list-process.component.css']
})
export class ListProcessComponent implements OnInit {

   pages: number = 1;
   list: Process[] = [];
   process: Process = new Process;
   activa: boolean = true;

   constructor(private service: ProcessServices, private _route: Router, private spinner: NgxSpinnerService) { }

   ngOnInit() {
      this.getAllProcess();
   }

   isAcitve() {
      return (this.list.length == 0) ? true : false;
   }


   getAllProcess() {
      this.service.getAllProcess().subscribe((res: any) => {
         this.list = res.data;

      }, error => {
         modalmenssage("Ha ocurrido un error al recuperar los datos...");
         this._route.navigateByUrl('/home');
      })

   }


   delete_id(id: string) {
      this.service.deleteProcess(id).subscribe(res => {
         modalmenssage("Has eliminar correctamente...");
         this.getAllProcess();
      }, error => {
         modalmenssage("Ha ocurrido un erro al tratar de eliminar....");
      });
   }





}
