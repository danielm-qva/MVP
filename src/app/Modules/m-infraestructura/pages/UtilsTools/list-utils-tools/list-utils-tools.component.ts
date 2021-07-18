import { Component, OnInit } from '@angular/core';
import { MInfraestructuraService } from 'src/app/Services/m-infraestructura.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-list-utils-tools',
  templateUrl: './list-utils-tools.component.html',
  styleUrls: ['./list-utils-tools.component.css']
})
export class ListUtilsToolsComponent implements OnInit {


  listElemtos: any[] ;
  isloading:boolean ;


  constructor(private services : MInfraestructuraService , public toast : ToastrService) { }

  ngOnInit(): void {
    this.isloading = true;
    this.getAll();
  }


  getAll(){
    this.services.getAllUH().subscribe((res:any) => {
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

 
    deleteUtilesTools(id:string){
       this.services.DeleteUtilsTools(id).subscribe(res=> {
        this.toast.success("Operacion realizada con exito.." , 'Boot MVP');
        this.isloading = true ;
        this.getAll();
       } , error => {
        this.toast.error("No se ha podido completar la operacion.." , 'Boot MVP');
       })
    }


}
