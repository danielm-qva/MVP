import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MInfraestructuraService } from 'src/app/Services/m-infraestructura.service';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-addmetrologia',
  templateUrl: './addmetrologia.component.html',
  styleUrls: ['./addmetrologia.component.css']
})
export class AddmetrologiaComponent implements OnInit {

  isloading:boolean ;

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



  constructor(public service : MInfraestructuraService, public route : Router , public Toast : ToastrService) { 
     this.isloading= true;
  }

  ngOnInit(): void {
      this.isloading = false ;
  }

  onSubmit(){

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
    console.log(data);

        this.service.addMetrologia(data) .subscribe(res => {
          this.Toast.success("Operacion realizada con exito.." , 'Boot MVP');
          this.route.navigate(['/infraes/listametrologia']);
        }, error => {
          this.Toast.error("No se ha podido completar la operacion.." , 'Boot MVP');
          this.route.navigate(['/infraes/listametrologia']);
        })

  }


}
