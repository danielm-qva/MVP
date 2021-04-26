import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MConocimService } from '../../../../../Services/mconocim.service';

import { FormControl, Validators, FormGroup, FormControlName, FormGroupName } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-inovacion',
  templateUrl: './update-inovacion.component.html',
  styleUrls: ['./update-inovacion.component.css']
})
export class UpdateInovacionComponent implements OnInit {

  constructor(private activeRutas: ActivatedRoute, private service: MConocimService , private toast: ToastrService , private route:Router) { }
     @Input() name:String ;

  isActiva: boolean;
    inovacion:any = {} ;

    froms = new FormGroup({
      name: new FormControl( '' , [Validators.required]),
      objective: new FormControl( '', [Validators.required]),
      expected_result: new FormControl('', [Validators.required]),
      budget: new FormControl('', [Validators.required]),
      term: new FormControl('', [Validators.required]),
      expected_annual_effect: new FormControl('', [Validators.required]),
      observation: new FormControl('')
    });
   
  


   ngOnInit() {
    this.isActiva = true;
     this.GetOnceInvacion(); 
   
  }



   GetOnceInvacion() {
     this.service.GetOneInvacion(this.activeRutas.snapshot.params.id).subscribe( (res:any) => {
         console.log(res.data);
          this.froms.controls.name.setValue(res.data.name);
          this.froms.controls.objective.setValue(res.data.objective);
          this.froms.controls.expected_result.setValue(res.data.expected_result);
          this.froms.controls.budget.setValue(res.data.budget.amount);
          this.froms.controls.term.setValue(res.data.term);
          this.froms.controls.expected_annual_effect.setValue(res.data.expected_annual_effect.amount);
          this.froms.controls.observation.setValue(res.data.observation);

      setTimeout(() => {
        this.isActiva = false;
      }, 800)

    }, error => {
      console.error(error);
      setTimeout(() => {
        this.isActiva = false;
      }, 800);
    });
  }


 
  UpdateInova(){

    console.log("hola");
    if (this.froms.valid == true) {
      let data: Object = {
        "innovation_project": {
          "budget": {
            "amount": this.froms.controls.budget.value,
            "currency": "CUP"
          },
          "expected_annual_effect": {
            "amount": this.froms.controls.expected_annual_effect.value,
            "currency": "CUP"
          },
          "expected_result": this.froms.controls.expected_result.value,
          "name": this.froms.controls.name.value,
          "objective": this.froms.controls.objective.value,
          "observation": this.froms.controls.observation.value,
          "term": this.froms.controls.term.value
        }

      }

      this.service.UpdateInvacion(this.activeRutas.snapshot.params.id , data).subscribe(res => {
      
           this.shoowMessas1();
           this.route.navigate(['/mconocimiento/listinovacion']);
      }, error => {
        console.log(error);
      });

    }

    else 
      this.showwFali();
     
  }




  shoowMessas() {
    this.toast.success('Has Eliminado un Proceso', 'Boots MVP', {
      timeOut: 2000
    })
  }
  
  shoowMessas1() {
    this.toast.success('Operacion excitosa..', 'Boots MVP', {
      timeOut: 2000
    })
  }


  showwFali() {
    this.toast.error('Pro favor cumplete correctamente los campos.....', 'Boots MVP', {
      timeOut: 2000
    })
  }





}
