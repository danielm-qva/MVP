import { Component, OnInit } from '@angular/core';
import { MInfraestructuraService } from 'src/app/Services/m-infraestructura.service';

import {ToastrService} from 'ngx-toastr';
 
@Component({
  selector: 'app-listmetrologia',
  templateUrl: './listmetrologia.component.html',
  styleUrls: ['./listmetrologia.component.css']
})
export class ListmetrologiaComponent implements OnInit {


  listElemtos: any[] ;
  isloading:boolean ;

  constructor(private service: MInfraestructuraService , public Toast : ToastrService) { }

  ngOnInit(): void {
       this.isloading = true ;
       this.getAll();
  }

  getAll(){
       this.service.getAllMetrologia().subscribe((res : any) => {
          console.log(res.data);
            this.listElemtos = res.data;
            setInterval(()=> {
               this.isloading = false;
            },800);
       } , error => {
        this.Toast.error("No se ha podido completar la operacion.." , 'Boot MVP');
             console.log(error);
             setInterval(()=> {
               this.isloading= false ;   
            }, 800);
       })
  }

 
   delte(id:string){
         this.service.DeleteMetrologia(id).subscribe(res => {  
          this.Toast.success("Operacion completada con exito.." , 'Boot MVP');         
              this.isloading = true ;
              this.getAll();
          },error =>{
               this.Toast.error("No se ha podido completar la operacion.." , 'Boot MVP'); 
          })
         }
   


}
