import { Component, OnInit } from '@angular/core';
import { ProvedorService } from '../../../../../Services/PovedorServices';
import { ProcessServices } from '../../../../../Services/ProcessServices';
import { Provider } from '../../../../../Models/provider';
import { Process } from '../../../../../Models/process';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-add-provider-process',
  templateUrl: './add-provider-process.component.html',
  styleUrls: ['./add-provider-process.component.css']
})
export class AddProviderProcessComponent implements OnInit {

  formProc_Provid = new FormGroup({
    select1: new FormControl(''),
    select2: new FormControl(''),
    good: new FormControl(''),
    tons: new FormControl(''),
    year: new FormControl('')
  });

  isActivar: Boolean;
  listaProvedore: Provider[] = [];
  listaProcess: Process[] = [];


  constructor(private serviceProvider: ProvedorService,
    private servicesPorcess: ProcessServices,
    private toast: ToastrService, private _router: Router) {


  }


  ngOnInit(): void {
    this.isActivar = true;
    this.fillListProvedor();
    this.fillListProcess();
  }

  enviar() {

    const process_provider =  {
        "provider_id": this.formProc_Provid.controls.select1.value,
        "process_id": this.formProc_Provid.controls.select2.value,
        "goods_type": this.formProc_Provid.controls.good.value,
        "tons_by_supplies": this.formProc_Provid.controls.tons.value,
        "number_supplies_year": this.formProc_Provid.controls.year.value
      };

   // console.log({process_provider});

    this.servicesPorcess.AddProvider_Process(process_provider).subscribe(  (res: any) => {
      console.log(res);
    }, error => {
        console.log(error);
    })
   
  }



  fillListProcess() {
    this.servicesPorcess.getAllProcess().subscribe((res: any) => {
      this.listaProcess = res.data;
      //console.log(this.listaProcess);
      setTimeout(() => {
        this.isActivar = false;
      }, 800);
    }, error => {
      this.showwFali();
      this._router.navigateByUrl('/admin/process/listProcess');
    })

  }


  fillListProvedor() {
    this.serviceProvider.getAllProvider().subscribe((res: any) => {
      this.listaProvedore = res.data;
      // console.log(this.listaProvedore);
    }, error => {
      this.showwFali();
      this._router.navigateByUrl('/admin/process/listProcess');
    });

  }



  showwFali() {
    this.toast.error('Ha ocurrido un error..... Intentelo una vez mas....', 'Boots MVP', {
      timeOut: 2000
    })
  }


}
