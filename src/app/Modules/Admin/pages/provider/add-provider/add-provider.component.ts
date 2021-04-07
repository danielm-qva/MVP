import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Process } from '../../../../../Models/process';
import { ProcessServices } from '../../../../../Services/ProcessServices';

import { Provider } from '../../../../../Models/provider';
import { ProvedorService } from '../../../../../Services/PovedorServices';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent implements OnInit {


  fromP = new FormGroup({
    name: new FormControl(''),
    distance: new FormControl(''),
    location: new FormControl('')
  });

  provedor: Provider = new Provider();
  process: Process[] = [];

  constructor(private sevieceProcess: ProcessServices, private servicesProvidre: ProvedorService, private _ruta: Router,
    private toast: ToastrService
  ) { }




  ngOnInit(): void {
    this.getAllProcess();
  }



  getAllProcess() {
    this.sevieceProcess.getAllProcess().subscribe((res: any) => {
      this.process = res.data;
    });

  }


  enviar() {
    this.provedor.name = this.fromP.controls.name.value;
    this.provedor.distance_km = this.fromP.controls.distance.value;
    this.provedor.location = this.fromP.controls.location.value;

    this.servicesProvidre.IsertProvedor(this.provedor).subscribe(res => {
      this.shoowMessas();
      this._ruta.navigateByUrl('/admin/provider/listProvider');
    }, error => {
      this.showwFali();

    })


  }



  shoowMessas() {
    this.toast.success('Has agregado un nuevo Proveedor', 'Boots MVP', {
      timeOut: 2000
    })
  }

  showwFali() {
    this.toast.error('Ha ocurrido un error al insertar los datos..... Intentelo una vez mas....', 'Boots MVP', {
      timeOut: 2000
    })
  }






}
