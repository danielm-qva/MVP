import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MAmbientalService } from 'src/app/Services/m-ambiental.service';

@Component({
  selector: 'app-liste-residuals',
  templateUrl: './liste-residuals.component.html',
  styleUrls: ['./liste-residuals.component.css']
})
export class ListeResidualsComponent implements OnInit {

  constructor(public services :MAmbientalService , public toast:ToastrService) { }
  listElemtos: any[] ;
  isloading:boolean ;


  ngOnInit(): void {
    this.isloading = true ;
       this.getAll();
  }

  getAll(){
    this.services.GetallEresiduals().subscribe((res:any) => {
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
    this.services.DeleteEresiduals  (id).subscribe(res =>{
     this.toast.success("Operacion realizada con exito.." , 'Boot MVP');
     this.isloading = true;
     this.getAll();
    } ,error => {
     this.toast.error("No se ha podido completar la operacion.." , 'Boot MVP');
    })
}

}
