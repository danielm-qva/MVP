import { Component, OnInit } from '@angular/core';
import { MInfraestructuraService } from 'src/app/Services/m-infraestructura.service';

import {ToastrService} from 'ngx-toastr';
 import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listmetrologia',
  templateUrl: './listmetrologia.component.html',
  styleUrls: ['./listmetrologia.component.css']
})
export class ListmetrologiaComponent implements OnInit {


  listElemtos: any[] ;
     detalles: Object[]=[];
  isloading:boolean ;

  constructor(private service: MInfraestructuraService , public Toast : ToastrService , public Modal : NgbModal) { }

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
     
     async detalles_Metrologia(id:string , longContent){
              this.isloading = true ;
          await  this.service.getByIdMetrologi(id).subscribe((res:any) => {
                    console.log(res);
                     this.detalles.push(res.data);
               })
               setTimeout(()=>{
                    this.isloading = false ;
            } , 1000)
               this.Modal.open(longContent);
     }


}
