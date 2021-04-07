import { Component, OnInit } from '@angular/core';
import { ProvedorService } from '../../../../../Services/PovedorServices';
import { Provider } from '../../../../../Models/provider';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-provider',
  templateUrl: './list-provider.component.html',
  styleUrls: ['./list-provider.component.css']
})
export class ListProviderComponent implements OnInit {


  isActiva: Boolean;

  listProvedor: Provider[] = [];

  constructor(private _services: ProvedorService, private toast: ToastrService , private _router:Router) {

  }


  ngOnInit() {
    this.isActiva = true;
    this.getAllProvedor();

  }


  getAllProvedor() {
    this._services.getAllProvider().subscribe((res: any) => {
      this.listProvedor = res.data
      setTimeout(() => {
        this.isActiva = false
      }, 800);
   
    }, error => {
       this.showwFali();
       setTimeout(() => {
        this.isActiva = false
      }, 800);
      this._router.navigateByUrl('/home');
    })

  }

  delete(id: string) {
    this.isActiva = true;
    this._services.deleteProvider(id).subscribe(res => {
      this.shoowMessas();
      this.getAllProvedor();
    }, error => {
      this.showwFali();
      setTimeout(() => {
        this.isActiva = false
      }, 800);
    })
  }

  shoowMessas() {
    this.toast.success('Has Eliminado un Proveedor', 'Boots MVP', {
      timeOut: 2000
    })
  }

  showwFali() {
    this.toast.error('Ha ocurrido un error..... Intentelo una vez mas....', 'Boots MVP', {
      timeOut: 2000
    })
  }

  


}
