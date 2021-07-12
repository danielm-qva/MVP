import { Component, OnInit , AfterViewInit } from '@angular/core';
 import { FormGroup , Validator , FormControl, Validators} from '@angular/forms';
 import {MInfraestructuraService} from '../../../../../Services/m-infraestructura.service';
 import { Router } from '@angular/router';

import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-add-aftangible',
  templateUrl: './add-aftangible.component.html',
  styleUrls: ['./add-aftangible.component.css']
})
export class AddAFTangibleComponent implements OnInit , AfterViewInit  {

    isloading : boolean = true ;

   FromAFT = new FormGroup({
        clasificacion : new FormControl('' ,[Validators.required]),
        porcentageDedicado : new FormControl('',[Validators.required , Validators.max(100)]),
        despreciation : new FormControl('',[Validators.required]),
        description : new FormControl('',[Validators.required]),
        numeroInventario : new FormControl('',[Validators.required]),
        precio : new FormControl('', [Validators.required]),
        cantidad : new FormControl('' , [Validators.required]),
   })
  constructor(public services:MInfraestructuraService , public route : Router  , public toast:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(){
   
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
      console.log(data);
          
     this.services.AddAFtangible(data).subscribe(res => {
       this.toast.success("Operacion realizada con exito.." , 'Boot MVP');
      this.route.navigate(['/infraes/listAFtangible']);
            

     } , erro => {
       this.toast.error("No se ha podido completar la operacion.." , 'Boot MVP');
           setTimeout(()=> {
               this.isloading =false;
           } , 500);
     })
    
  }



  ngAfterViewInit(){
     setTimeout(()=>{
        this.isloading= false ;
     },600);
  }




  



}
