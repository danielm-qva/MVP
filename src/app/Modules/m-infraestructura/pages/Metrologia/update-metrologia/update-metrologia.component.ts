import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MInfraestructuraService } from 'src/app/Services/m-infraestructura.service';

@Component({
  selector: 'app-update-metrologia',
  templateUrl: './update-metrologia.component.html',
  styleUrls: ['./update-metrologia.component.css']
})
export class UpdateMetrologiaComponent implements OnInit {


  isloading:boolean ;
   id : string = '';
    formetrologia  = new FormGroup({
         puntoControl : new FormControl('' , [Validators.required]) ,
         Vcontrolada : new FormControl('', [Validators.required]),
         instrumento : new FormControl('' , [Validators.required]),
         precision : new FormControl('' , [Validators.required]),
         cantidad : new FormControl('' , [Validators.required]),
         Eproceso : new FormControl('', [Validators.required]),
          precio : new FormControl('' , [Validators.required]),
          VidaUtil : new FormControl('' , [Validators.required]),
          Frecuencia : new FormControl('' ,[Validators.required]),
          PrecionVerificacion : new FormControl('' ,[Validators.required]),
          Ejecutor : new FormControl('', [Validators.required])
    })

    constructor( public activeRoute : ActivatedRoute,public service : MInfraestructuraService, public route : Router , public Toast : ToastrService) { 
  
   }

  ngOnInit(): void {
     this.id = this.activeRoute.snapshot.params.id;
    this.isloading = true ;
    this.Fill();
  }

 Fill(){
      this.service.getByIdMetrologi(this.id).subscribe((res:any) =>{
     console.log(res.data);
  
       this.control.puntoControl.setValue(res.data.name);
       this.control.Vcontrolada.setValue(res.data.variable_to_control);
       this.control.instrumento.setValue(res.data.instrument);
       this.control.precision.setValue(res.data.precision);
       this.control.cantidad.setValue(res.data.quantity);
       this.control.Eproceso.setValue(res.data.dedicated_percentage);
       this.control.precio.setValue(res.data.price_per_unit.amount);
       this.control.VidaUtil.setValue(res.data.useful_life_years)
       this.control.Frecuencia.setValue(res.data.verification_frequency_months);
       this.control.PrecionVerificacion.setValue(res.data.price_per_verification.amount);
       this.control.Ejecutor.setValue(res.data.executor);

     setTimeout(()=>{
         this.isloading = false;
     } , 800);

      } , erro =>{
           setTimeout(()=>{
              this.isloading = false ;
           } , 500);
           this.route.navigate(['/infraes/listametrologia']);
      })
 }

 onUpdate(){

  let data:Object ={
    "control_point" : {
      "name"  : this.formetrologia.controls.puntoControl.value,
       "variable_to_control" : this.formetrologia.controls.Vcontrolada.value ,
       "instrument" : this.formetrologia.controls.instrumento.value ,
       "precision" : String(this.formetrologia.controls.precision.value),
        "quantity" : this.formetrologia.controls.cantidad.value ,
        "dedicated_percentage" : String(this.formetrologia.controls.Eproceso.value),
        "price_per_unit": {
          "amount" : String(this.formetrologia.controls.precio.value),
          "currency" : "CUP"
       },
       "useful_life_years" : this.formetrologia.controls.VidaUtil.value ,
        "verification_frequency_months" : this.formetrologia.controls.Frecuencia.value,
        "price_per_verification": {
          "amount" : String(this.formetrologia.controls.PrecionVerificacion.value),
          "currency" : "CUP"
       },
       "executor" : this.formetrologia.controls.Ejecutor.value
    }
}

  this.service.updateMetrologia(this.id,data) .subscribe(res => {
    this.Toast.success("Operacion realizada con exito.." , 'Boot MVP');
    this.route.navigate(['/infraes/listametrologia']);
  }, error => {
    this.Toast.error("No se ha podido completar la operacion.." , 'Boot MVP');
    this.route.navigate(['/infraes/listametrologia']);
  })

 }

 get control(){
       return this.formetrologia.controls ;
 }


}
