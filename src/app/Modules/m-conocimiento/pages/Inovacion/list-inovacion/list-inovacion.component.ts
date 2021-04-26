import { Component, Input, OnInit } from '@angular/core';
import { MConocimService } from '../../../../../Services/mconocim.service';
import { Router } from '@angular/router';


import { ToastrService } from 'ngx-toastr';



@Component({
   selector: 'app-list-inovacion',
   templateUrl: './list-inovacion.component.html',
   styleUrls: ['./list-inovacion.component.css']
})
export class ListInovacionComponent implements OnInit {

   list: Object[] = [];
   isActiva: boolean;

   constructor(private service: MConocimService, private route: Router, private toast: ToastrService) { }




   ngOnInit(): void {
      this.isActiva = true;
      this.getALLinovacaion();

   }


   getALLinovacaion() {
      this.service.GetInovacion().subscribe((res: any) => {
         this.list = res.data;
         console.log(res.data);
         setTimeout(() => {
            this.isActiva = false;
         }, 800)
      }, error => {
         this.showwFali();
         setTimeout(() => {
            this.isActiva = false;
         }, 800)
         this.route.navigate(['/home']);
      })
   }


   deleteinovacion(id: string) {
      this.isActiva = true;
      this.service.DeleteInovacion(id).subscribe(res => {
         this.getALLinovacaion();
         setTimeout(() => {
            this.isActiva = false;
         }, 800);

      }, error => {
         console.error(error);
      })
   }

   
   UpdateInvacion(id: string) {
      this.isActiva = true;
      this.service.GetOneInvacion(id).subscribe(res => {
         console.log(res);
         setTimeout(() => {
            this.isActiva = false;
         }, 800);

      }, error => {
         console.log(error);
      })

   }


   shoowMessas() {
      this.toast.success('Has Eliminado un Proceso', 'Boots MVP', {
         timeOut: 2000
      })
   }

   showwFali() {
      this.toast.error('Hemos presentado probelma.....', 'Boots MVP', {
         timeOut: 2000
      })
   }


}

