import { Component, OnInit } from '@angular/core';
 import {MInfraestructuraService}  from '../../../../../Services/m-infraestructura.service';
 import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-aftangible',
  templateUrl: './list-aftangible.component.html',
  styleUrls: ['./list-aftangible.component.css']
})
export class ListAFTangibleComponent implements OnInit {

 
   listElemtos: any[] ;
   isloading:boolean ;
  constructor(public service:MInfraestructuraService , public toast:ToastrService) { }

  ngOnInit(): void {
    this.isloading = true;
    this.getAll();
  }


    getAll(){
     this.service.getAll().subscribe((res:any) => {
        console.log(res.data);
         this.listElemtos = res.data;
         setTimeout(()=> {
          this.isloading = false;
         },800) 
     } , error => {
          console.log(error);
          this.isloading = false ;  
     })

    }


    deleteAFtangible(id:string){
      this.service.DeleteAFtangible(id).subscribe(res => {
       this.toast.success("Operacion realizada con exito.." , 'Boot MVP');
         this.isloading = true;
         this.getAll();
      } ,error => {
       this.toast.error("No se ha podido completar la operacion.." , 'Boot MVP');
      })
   }

    updateAFtangible(id:string , data:Object){
       
    }

   showSucces(menss) {
    this.toast.success(menss, 'Boots MVP', {
       timeOut: 2000
    })
 }
 showErro(menss) {
  this.toast.error(menss, 'Boots MVP', {
     timeOut: 2000
  })
}





}
