import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl, Validators} from '@angular/forms';
import { MInfraestructuraService } from 'src/app/Services/m-infraestructura.service';
import {ToastrService} from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-utils-tools',
  templateUrl: './add-utils-tools.component.html',
  styleUrls: ['./add-utils-tools.component.css']
})
export class AddUtilsToolsComponent implements OnInit {

  isloading : boolean = true ;

  fromsUTools = new FormGroup({
      descripcion : new FormControl('',[Validators.required]),
      cantidad  : new  FormControl('' , [Validators.required]) ,
      precio : new FormControl('', [Validators.required]),
      porcentageAnual : new FormControl('' , [Validators.required]),
      porcetagewear : new FormControl('' , [Validators.required]),
  })
   

  constructor(private services : MInfraestructuraService , public route : Router,public toast :ToastrService) { }

  ngOnInit(): void {
    setTimeout(()=> {
      this.isloading = false ;
    } , 500);
  }
  onSubmit(){
    let data: Object ={
          'util_tool' : {
            "description" : this.fromsUTools.controls.descripcion.value ,
             "quantity" : this.fromsUTools.controls.cantidad.value,
             "price_per_unit": {
              "amount" : String(this.fromsUTools.controls.precio.value),
              "currency" : "CUP"
           },
           "dedication_percentage" : String(this.fromsUTools.controls.porcentageAnual.value),
           "annual_wear_percentage" : String(this.fromsUTools.controls.porcetagewear.value)


          }
    }

       console.log(data);

       this.services.AddUtilsTools(data).subscribe(res => {
        this.toast.success("Operacion realizada con exito.." , 'Boot MVP');
        this.route.navigate(['/infraes/listUtilstools']);
       }, error=> {
        this.toast.error("No se ha podido completar la operacion.." , 'Boot MVP');
        setTimeout(()=> {
          this.isloading =false;
      } , 500);
       })
  }

}
