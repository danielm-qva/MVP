import { Component, OnInit } from '@angular/core';
import { ProcessServices } from '../../../../../Services/ProcessServices';
import { ProvedorService } from '../../../../../Services/PovedorServices';

import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-enva-provedor',
  templateUrl: './enva-provedor.component.html',
  styleUrls: ['./enva-provedor.component.css']
})
export class EnvaProvedorComponent implements OnInit {


  fromEva = new FormGroup({
    select1: new FormControl(''),
    select2: new FormControl(''),
    credit: new FormControl(''),
    creditP: new FormControl(''),
    punt: new FormControl(''),
    puntP: new FormControl(''),
    cali: new FormControl(''),
    caliP: new FormControl(''),
    reli: new FormControl(''),
    reliP: new FormControl(''),
    canti: new FormControl(''),
    cantiP: new FormControl('')

  });
  

  isActivar: boolean;
  isLent: boolean = false;
  id_prove = "";
  listaProcess = [];
  listaPrevider:Object[] = [];

  constructor(private _serivec: ProcessServices, private _serviceP: ProvedorService, private toast: ToastrService) { }

  ngOnInit(): void {
    this.isActivar = true
    this.Obtener_producto();
  }


  Obtener_producto() {
    this._serivec.getAllProcess().subscribe((res: any) => {
      this.listaProcess = res.data;
      setTimeout(() => {
        this.isActivar = false;
      }, 1000);
    })
  }


  onChange(centroId) {
    this.isActivar = true;
      
    this._serivec.getProvedor_Process(centroId).subscribe((res: any) => {
      console.log(res.data);
              res.data.map(res =>  {
                   if(res.process.id == centroId){
                         this.listaPrevider.push( { "id":res.process_provider_id ,"data":res.provider});
                   }
              });

      setTimeout(() => {
        this.isActivar = false;
      }, 800);
    })

   // console.log(this.listaPrevider);
    this.isLent = true;
    //console.log(centroId);
  }




  chancgeProvedor(e) {
    this.id_prove = e;
    console.log(this.id_prove);
  }


  enviar() {

    const provider_evaluation = {
      "credit": this.fromEva.controls.credit.value,
      "credit_weighing": this.fromEva.controls.creditP.value,
      "punctuality": this.fromEva.controls.punt.value,
      "punctuality_weighing": this.fromEva.controls.puntP.value,
      "quality": this.fromEva.controls.cali.value,
      "quality_weighing": this.fromEva.controls.caliP.value,
      "quantity": this.fromEva.controls.canti.value,
      "quantity_weighing": this.fromEva.controls.cantiP.value,
      "relations": this.fromEva.controls.reli.value,
      "relations_weighing": this.fromEva.controls.reliP.value,
      "process_provider_id": this.id_prove
    };

    console.log({provider_evaluation});

    this._serivec.AddEvalution_Provider(provider_evaluation).subscribe(res => 
      { console.log(res) } , error => {console.log(error)});


  }










}
