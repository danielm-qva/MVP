import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MAmbientalService } from 'src/app/Services/m-ambiental.service';

@Component({
  selector: 'app-list-waste-process',
  templateUrl: './list-waste-process.component.html',
  styleUrls: ['./list-waste-process.component.css']
})
export class ListWasteProcessComponent implements OnInit {

  constructor(public services :MAmbientalService , public toast:ToastrService) { }
  listElemtos: any[] ;
  isloading:boolean ;


  ngOnInit(): void {
    this.isloading = true ;
       this.getAll();
  }

  getAll(){
    this.services.GetallWProcess().subscribe((res:any) => {
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
    this.services.DeleteWProcess(id).subscribe(res =>{
     this.toast.success("Operacion realizada con exito.." , 'Boot MVP');
     this.isloading = true;
     this.getAll();
    } ,error => {
     this.toast.error("No se ha podido completar la operacion.." , 'Boot MVP');
    })
}

}
