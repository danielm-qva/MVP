import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../Services/ProductServices';
import { Router } from '@angular/router';


declare const modalmenssage:any ;


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {


    producto:any = {}

  constructor(private service:ProductService , private _route:Router) { }

  ngOnInit(): void {
    this.getAllProdcuto();
  }


    getAllProdcuto(){
        this.service.getAllPorducts().subscribe( (res:any)  => {
             this.producto = res.data ;
             
        } , error => {
          modalmenssage("Ha ocurrido un error al recuperar los datos");
             this._route.navigateByUrl('/home');
        });
    }


    obtener(id:string){
      this.service.deleteProducto(id).subscribe(res => {    
            modalmenssage("Has eliminado...")
           this.getAllProdcuto();
      }, error=> {
         modalmenssage("Ha ocurrido un eroor .....")
      });

    }

}
