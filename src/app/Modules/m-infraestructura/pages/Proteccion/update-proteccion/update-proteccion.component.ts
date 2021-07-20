import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MInfraestructuraService } from 'src/app/Services/m-infraestructura.service';

@Component({
  selector: 'app-update-proteccion',
  templateUrl: './update-proteccion.component.html',
  styleUrls: ['./update-proteccion.component.css']
})
export class UpdateProteccionComponent implements OnInit {


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

  constructor( public route : Router, public Toast : ToastrService , public activeRutes : ActivatedRoute ,public service : MInfraestructuraService )  { }

  ngOnInit(): void {
   this.isloading = true ;
   this.isFill();
  }

  isFill(){
      this.service.getByIdProteccion(this.activeRutes.snapshot.params.id).subscribe( (res:any) => {

          console.log(res.data);
             
             this.FormControl.name.setValue(res.data.name);
             this.FormControl.recursos.setValue(res.data.resource);
             this.FormControl.cantidad.setValue(res.data.quantity);
             this.FormControl.precio.setValue(res.data.price_per_unit.amount);
             this.FormControl.vidaUtil.setValue(res.data.useful_life_months);
             this.FormControl.pagomensual.setValue(res.data.monthly_payment.amount);
             this.FormControl.Observaciones.setValue(res.data.observations);

          setTimeout(()=>{
              this.isloading = false;
          }, 800);
      } ,error => {
          setTimeout(()=>{
              this.isloading = false;
          },800);
      })
  }

  onUpdate(){
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
     this.service.updateProteccion( this.activeRutes.snapshot.params.id, data).subscribe(res => {
      this.Toast.success("Operacion realizada con exito.." , 'Boot MVP');
      this.route.navigate(['/infraes/listProteccio']);
     } , error => {
      this.Toast.error("No se ha podido completar la operacion.." , 'Boot MVP');
      this.route.navigate(['/infraes/listProteccio']);
     })
}
  

  get FormControl(){
      return this.formsProteccion.controls;
  }


}
