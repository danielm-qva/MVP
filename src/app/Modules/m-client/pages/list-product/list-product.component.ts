import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../Services/ProductServices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {


    producto:any = {}

  constructor(private service:ProductService , private _route:Router) { }

  ngOnInit(): void {
 
    this.service.getAllPorducts().subscribe((res:any) =>{
      this.producto = res.data;
     //console.log();
 })

  }

  ngAfterContentChecked(): void {
  this.ngOnInit();

    }
    ngAfterViewInit(): void {

   this.ngOnInit();
    }

    obtener(id:string){
      this.service.deleteProducto(id).subscribe(res => {});

    }

}
