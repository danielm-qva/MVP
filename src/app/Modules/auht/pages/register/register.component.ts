import { Component, OnInit } from '@angular/core';
 import { FormControlName, FormGroup, FormGroupName, FormControl } from '@angular/forms';
import { User } from '../../../../Models/User';
import { AuthService } from '../../../../Services/Auth';
import { Router } from '@angular/router';

import {ToastrService} from 'ngx-toastr'; 

 declare const modalmenssage:any ;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

         user : User = new User();
      fromRegis = new FormGroup({
           email : new FormControl(''),
            pass: new FormControl('')
      });


  constructor(private service:AuthService , private router:Router , private toas:ToastrService) { }

  ngOnInit(): void {
  }


  Enviar(){
      this.user.email = this.fromRegis.controls.email.value ;
      this.user.pass = this.fromRegis.controls.pass.value ;
           
      this.service.Register_user(this.user).subscribe(res => {
               this.showToastSuccess();
           this.router.navigateByUrl('/auth/login');
      }, error => {
       this.showToastError();
      })
       
  }


     showToastSuccess(){
        this.toas.success("Registro exitoso......" , "Boot MVP" , {
           timeOut:2000
        });
     }


     showToastError(){
       this.toas.error("Ha ocurrido un erro...." , "Boot MVP" ,{
          timeOut:2000
       })
     }




}
