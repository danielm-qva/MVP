import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder ,Validators } from '@angular/forms';
import { Process } from '../../../../../Models/process';
import { ProcessServices } from '../../../../../Services/ProcessServices';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr' ;

@Component({
  selector: 'app-add-process',
  templateUrl: './add-process.component.html',
  styleUrls: ['./add-process.component.css']
})
export class AddProcessComponent implements OnInit {

    process:Process = new Process ;
      fgFrom: FormGroup ;
      
  constructor(private fb:FormBuilder , private srevice:ProcessServices , private route:Router , private toast:ToastrService ) { }

  ngOnInit(): void {
    this.beginForm();
  }

   hola(){
      this.process.name = this.fgFrom.controls.name.value ;
      this.process.description = this.fgFrom.controls.descriptions.value;
       //console.log(this.fgFrom.controls.descriptions.value);
             this.srevice.getAddProcess(this.process).subscribe(res => {
                 this.shoowMessas();

             } , error=>{
               this.showwFali();
             });
             
           this.route.navigateByUrl("/admin/process/listProcess");
               
   }


   beginForm() {
    this.fgFrom = this.fb.group({
      name: ['', [Validators.required]],
       descriptions: ['' , [Validators.required]]
    });
  }

  


shoowMessas() {
    this.toast.success('Has agregado un nuevo Proceso', 'Boots MVP', {
      timeOut: 2000
    })
  }

  showwFali() {
    this.toast.error('Ha ocurrido un error al insertar los datos..... Intentelo una vez mas....', 'Boots MVP', {
      timeOut: 2000
    })
  }


}


