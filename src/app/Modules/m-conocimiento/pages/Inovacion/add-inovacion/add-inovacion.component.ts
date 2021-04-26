import { Component, OnInit } from '@angular/core';
import { MConocimService } from '../../../../../Services/mconocim.service';
import {FormControl, Validators, FormGroup } from '@angular/forms';


import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-inovacion',
  templateUrl: './add-inovacion.component.html',
  styleUrls: ['./add-inovacion.component.css']
})
export class AddInovacionComponent implements OnInit {


  froms = new FormGroup({
    name: new FormControl('', [Validators.required]),
    objective: new FormControl('', [Validators.required]),
    expected_result: new FormControl(null, [Validators.required]),
    budget: new FormControl('', [Validators.required]),
    term: new FormControl('', [Validators.required]),
    expected_annual_effect: new FormControl('', [Validators.required]),
    observation: new FormControl('')
  });

  constructor(private service: MConocimService, private toast: ToastrService , private route:Router) { }

  ngOnInit(): void {
  }


  Enviar() {

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

      this.service.AddInovacion(data).subscribe(res => {
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