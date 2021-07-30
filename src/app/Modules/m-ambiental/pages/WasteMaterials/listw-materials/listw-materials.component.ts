import { Component, OnInit } from '@angular/core';
import {MAmbientalService} from './../../../../../Services/m-ambiental.service';
import { ToastrService} from 'ngx-toastr'; 
 @Component({
  selector: 'app-listw-materials',
  templateUrl: './listw-materials.component.html',
  styleUrls: ['./listw-materials.component.css']
})
export class ListwMaterialsComponent implements OnInit {

  constructor(public services :MAmbientalService , public toast:ToastrService) { }
  listElemtos: any[] ;
  isloading:boolean ;

  ngOnInit(): void {
    this.isloading = true ;
       this.getAll();
  }

  getAll(){
    this.services.GetallWasteM().subscribe((res:any) => {
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

   deletewMatarials(id){
       this.isloading = true ;
       this.services.DeleteWasteM(id).subscribe(res =>{
        this.toast.success("Operacion realizada con exito.." , 'Boot MVP');
        this.isloading = true;
        this.getAll();
       } ,error => {
        this.toast.error("No se ha podido completar la operacion.." , 'Boot MVP');
       })
   }

}
