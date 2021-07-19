import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MInfraestructuraService } from 'src/app/Services/m-infraestructura.service';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-list-proteccion',
  templateUrl: './list-proteccion.component.html',
  styleUrls: ['./list-proteccion.component.css']
})
export class ListProteccionComponent implements OnInit{

  isloading:boolean ;
  listElemtos: any[] = [] ;
  constructor(public service:MInfraestructuraService , public Toast:ToastrService  ) { 
       
  } 

  ngOnInit(): void {
    this.isloading = true ;
       this.getAll();
  }

     getAll() {
         this.service.getAllProteccion().subscribe( (res:any) => {
              console.log(res.data);
              this.listElemtos = res.data;
              setInterval(()=> {
                  this.isloading = false;
              } , 800);
         } ,error => {
             this.Toast.error("Error a cargar los datos" , 'Boot Mvp');
             setInterval(()=>{
                  this.isloading = false;
             }, 500)
         })
     }


     Delete(id:string){
        this.service.DeleteProteccion(id).subscribe(res => {
          this.Toast.success("Operacion realizada con exito.." , 'Boot MVP');
          this.isloading = true ;
        this.getAll();
        } , erro => {
          this.Toast.error("No se ha podido completar la operacion.." , 'Boot MVP');
        })
     }


}
