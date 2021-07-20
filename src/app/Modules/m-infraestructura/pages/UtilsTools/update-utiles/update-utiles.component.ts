import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MInfraestructuraService } from 'src/app/Services/m-infraestructura.service';

@Component({
  selector: 'app-update-utiles',
  templateUrl: './update-utiles.component.html',
  styleUrls: ['./update-utiles.component.css']
})
export class UpdateUtilesComponent implements OnInit {

  constructor(public services : MInfraestructuraService,  public route : Router,public activeroutas: ActivatedRoute , public Toast : ToastrService) { }

  isloading : boolean  ;

  fromsUTools = new FormGroup({
      descripcion : new FormControl('',[Validators.required]),
      cantidad  : new  FormControl('' , [Validators.required]) ,
      precio : new FormControl('', [Validators.required]),
      porcentageAnual : new FormControl('' , [Validators.required]),
      porcetagewear : new FormControl('' , [Validators.required]),
  })
   
  ngOnInit(): void {
    this.isloading = true;
 this.rellenar();
    
  }


    rellenar(){
      this.services.getbyId(this.activeroutas.snapshot.params.id).subscribe((res:any) => {
         console.log(res.data);
           this.fromsUTools.controls.descripcion.setValue(res.data.description);
           this.fromsUTools.controls.cantidad.setValue(res.data.quantity);
           this.fromsUTools.controls.precio.setValue(res.data.price_per_unit.amount);
           this.fromsUTools.controls.porcentageAnual.setValue(res.data.dedication_percentage);
           this.fromsUTools.controls.porcetagewear.setValue(res.data.annual_wear_percentage);
        setInterval(()=> {
           this.isloading= false ;
        }, 800);
    } , erro => {
         this.Toast.error("Ha ocurrido un error.." , 'Mvp Boot');
          setInterval(()=>{
             this.isloading = false ;
          }, 500);
    })
    }


  onUpdate(){
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

   this.services.UpdateUtileTools( this.activeroutas.snapshot.params.id, data).subscribe(res => {
    this.Toast.success("Operacion realizada con exito.." , 'Boot MVP');
    this.route.navigate(['/infraes/listUtilstools']);
   }, error=> {
    this.Toast.error("No se ha podido completar la operacion.." , 'Boot MVP');
    this.route.navigate(['/infraes/listUtilstools']);
    setTimeout(()=> {
      this.isloading =false;
  } , 500);
   })
    }
  


}
