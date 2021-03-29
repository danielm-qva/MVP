import { Injectable } from '@angular/core';
import {
    HttpClient,
    HttpHeaders,
    JsonpClientBackend,
  } from '@angular/common/http';
  
  import { product } from "./../Models/products";
  


@Injectable({
    providedIn: 'root'
})
export class ProductService {


    products: product[] = [];

    private URL = 'https://mvp-api-jc.herokuapp.com/api/';
  
    public header = {
      //localStorage.getItem('token'),
      authorization: 'Bearer ' + localStorage.getItem('token'),
      "Content-Type": "application/json",
  
    };
  
    constructor(private http: HttpClient) {}
  
    getAllPorducts() {
      return  this.http.get<product[]>(this.URL + 'products', {headers: this.header,})
      }
  
    createProduct(product: product) {
      return this.http.post(this.URL +'products', {product}, {
        headers: this.header,
      })
    }
  
    getoneProduct(id: string) {
      let url = `${this.URL}products/${id}`;
      return this.http.get(url, { headers: this.header });
    }
  
    
    deleteProducto(id: string) {
      let url = `${this.URL}products/${id}`;
      return this.http.delete(url, { headers: this.header });
    }


}