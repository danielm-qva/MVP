import { Component, OnInit } from '@angular/core';
import { FormControlName, FormGroup, FormGroupName, FormControl, Validators } from '@angular/forms';
import { User } from '../../../../Models/User';
import { AuthService } from '../../../../Services/Auth';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';


@Component({
   selector: 'app-register',
   templateUrl: './register.component.html',
   styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   user: User = new User();

   fromRegis = new FormGroup({
      email: new FormControl('' ,  [Validators.email,Validators.required]),
      pass: new FormControl('' ,  [Validators.required ,Validators.minLength(11)])
   });


   constructor(private service: AuthService, private router: Router, private toas: ToastrService) { }

   ngOnInit(): void {
   }


   Enviar() {
      this.user.email = this.fromRegis.controls.email.value;
      this.user.pass = this.fromRegis.controls.pass.value;

       if(this.fromRegis.status != "INVALID"){
          console.log(this.fromRegis.controls.email.errors)
          this.service.Register_user(this.user).subscribe(res => {
             this.showToastSuccess();
             this.router.navigateByUrl('/auth/login');
            }, error => {
               this.showToastError();
            })
         }
     else
     this.showToastError();

   }


   showToastSuccess() {
      this.toas.success("Registro exitoso......", "Boot MVP", {
         timeOut: 1000
      });
   }


   showToastError() {
      this.toas.error("Ha ocurrido un erro....", "Boot MVP", {
         timeOut: 1000
      })
   }




}
