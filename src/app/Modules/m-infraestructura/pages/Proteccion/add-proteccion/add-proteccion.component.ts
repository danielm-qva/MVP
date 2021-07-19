import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl, Validators} from '@angular/forms';
import { MInfraestructuraService } from 'src/app/Services/m-infraestructura.service';
import {ToastrService} from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-proteccion',
  templateUrl: './add-proteccion.component.html',
  styleUrls: ['./add-proteccion.component.css']
})
export class AddProteccionComponent implements OnInit {


   isloading : boolean ;

    formsProteccion = new FormGroup({
      name : new FormControl('' ,[Validators.required]),
      recursos : new FormControl('' , [Validators.required]),
      cantidad : new FormControl('' ,[Validators.required]),
      precio : new FormControl('' ,[Validators.required]),
      vidaUtil : new FormControl('' ,[Validators.required]),
      pagomensual : new FormControl('' ,[Validators.required]),
      Observaciones : new FormControl('')
    })


  constructor(public service : MInfraestructuraService ,public route : Router , public Toast : ToastrService)  { }

  ngOnInit(): void {
  }
  onSubmit(){
    let data:Object = {
        'action': {
           'name' : this.formsProteccion.controls.name.value,
           'resource' : this.formsProteccion.controls.recursos.value,
            'quantity' : this.formsProteccion.controls.cantidad.value,
            "price_per_unit": {
              "amount" : String(this.formsProteccion.controls.precio.value),
              "currency" : "CUP"
           },
           'useful_life_months' : this.formsProteccion.controls.vidaUtil.value,
           "monthly_payment": {
            "amount" : String(this.formsProteccion.controls.pagomensual.value),
            "currency" : "CUP"
         },
         "observations": this.formsProteccion.controls.Observaciones.value

        }
    }
       console.log(data);

       this.service.addProteccion(data).subscribe(res => {
        this.Toast.success("Operacion realizada con exito.." , 'Boot MVP');
        this.route.navigate(['/infraes/listProteccio']);
       } , error => {
        this.Toast.error("No se ha podido completar la operacion.." , 'Boot MVP');
        this.route.navigate(['/infraes/listProteccio']);
       })
  }
}
