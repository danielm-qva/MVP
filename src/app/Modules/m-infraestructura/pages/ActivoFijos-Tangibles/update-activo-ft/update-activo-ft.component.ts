import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router  } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MInfraestructuraService } from 'src/app/Services/m-infraestructura.service';

@Component({
  selector: 'app-update-activo-ft',
  templateUrl: './update-activo-ft.component.html',
  styleUrls: ['./update-activo-ft.component.css']
})
export class UpdateActivoFTComponent implements OnInit {


  isloading : boolean ;
    id : string  =''; 
  FromAFT = new FormGroup({
       clasificacion : new FormControl('' ,[Validators.required]),
       porcentageDedicado : new FormControl('',[Validators.required , Validators.max(100)]),
       despreciation : new FormControl('',[Validators.required]),
       description : new FormControl('',[Validators.required]),
       numeroInventario : new FormControl('',[Validators.required]),
       precio : new FormControl('', [Validators.required]),
       cantidad : new FormControl('' , [Validators.required]),
  })
  constructor( public route : Router,public Toast : ToastrService, public service:MInfraestructuraService , public activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
      this.id  = this.activeRoute.snapshot.params.id;
          this.isloading = true ;
    this.Fill();
  }
    Fill(){
      this.service.getByIdATF(this.id).subscribe( (res:any) => {
        console.log(res.data);
         
          this.control.clasificacion.setValue(res.data.classification);
          this.control.porcentageDedicado.setValue(res.data.dedicated_percentage);
          this.control.despreciation.setValue(res.data.depreciation_rate);
          this.control.description.setValue(res.data.description);
          this.control.numeroInventario.setValue(res.data.inventory_number);
          this.control.precio.setValue(res.data.purchase_price.amount);
          this.control.cantidad.setValue(res.data.quantity);

         setTimeout(()=> {
           this.isloading = false ;
         } , 800);
      
      } ,erro => {
          setTimeout(()=>{
              this.isloading = false ;
          } , 800);
      })


    }

   onUpdate(){

    let data:Object = {
      "tangible_fixed_asset": {
        "classification" :  this.FromAFT.controls.clasificacion.value,
        "dedicated_percentage" : String(this.FromAFT.controls.porcentageDedicado.value),
        "depreciation_rate" : String(this.FromAFT.controls.despreciation.value),
        "description": this.FromAFT.controls.description.value,
        "inventory_number" : String(this.FromAFT.controls.numeroInventario.value),
        "purchase_price": {
           "amount" : String(this.FromAFT.controls.precio.value),
           "currency" : "CUP"
        },
        "quantity" : String(this.FromAFT.controls.cantidad.value),
  }

      }
     this.service.UpdataATfible(this.id, data).subscribe(res => {
       this.Toast.success("Operacion realizada con exito.." , 'Boot MVP');
      this.route.navigate(['/infraes/listAFtangible']);

     } , erro => {
       this.Toast.error("No se ha podido completar la operacion.." , 'Boot MVP');
       this.route.navigate(['/infraes/listAFtangible']);

           setTimeout(()=> {
               this.isloading =false;
           } , 500);
     })
   }
  
   get control(){
      return this.FromAFT.controls ;
   }



}
