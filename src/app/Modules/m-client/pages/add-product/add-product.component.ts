import { Component, OnInit } from '@angular/core';
 import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ProductService } from '../../../../Services/ProductServices';
import { product } from '../../../../Models/products';
import { Factores } from '../../../../Models/Factores';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
           
     products :product = new product();
      faclist:Factores[] = [];
      fac:Factores[]= [];

      fromP = new FormGroup({
        name: new FormControl(''),
         dos: new FormControl('')
      });
       
        activa:boolean = true ;
        
      fromF = new FormGroup({
           namef : new FormControl(''),
            valor:new FormControl(''),
            pon: new FormControl('')
      });

  constructor(private fbuilder:FormBuilder , private  services:ProductService, private _router:Router) { 

  }

  ngOnInit(): void {

  
  }

  ngAfterViewInit(): void {
   
  

  }

  ngAfterContentChecked(): void {

  
  }



  onSubmit(){
   
         console.log(this.fromP.valid);

    this.products.name = this.fromP.controls.name.value ;
     this.products.factors = this.faclist ;

     this.services.createProduct(this.products).subscribe(res => {});
         
     this._router.navigateByUrl('/products/listproducts') ;


  }

  submit(){
     this.faclist.push({
          name : this.fromF.controls.namef.value,
          value : this.fromF.controls.valor.value,
          weighing : this.fromF.controls.pon.value
     }) ;
   this.fromF.reset();
    
  }
       
  inLenghtList(){
     return (this.faclist.length == 0) ? true : false ;
  }
  

      

}

