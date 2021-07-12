import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../Services/ProductServices';
import { Router } from '@angular/router';
import { product } from '../../../../Models/products';

declare const modalmenssage: any;


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  pages: number = 1;
  isActivar: Boolean;

  producto: Array<product> = [];

  constructor(private service: ProductService, private _route: Router) { }

  ngOnInit(): void {
    this.isActivar = true;
    this.getAllProdcuto();
  }


  getAllProdcuto() {
    this.service.getAllPorducts().subscribe((res: any) => {
      this.producto = res.data;
      setTimeout(() => {
        this.isActivar = false;
      }, 800);

    }, error => {
      modalmenssage("Ha ocurrido un error al recuperar los datos , verifique su coneccion ");
      this._route.navigateByUrl('/home');
    });
  }


  obtener(id: string) {
    this.service.deleteProducto(id).subscribe(res => {
      modalmenssage("Has eliminado...")
      this.getAllProdcuto();
    }, error => {
      modalmenssage("Ha ocurrido un eroor ..... verifique su connections ")
    });

  }


}
