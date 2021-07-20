import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../../../Services/Auth';
import { User } from '../../../../Models/User';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  user: User = new User();
  fgValidator: FormGroup;

  isActivar: boolean ;

  constructor(private fb: FormBuilder , private serviceAuth: AuthService, private toastr: ToastrService) {

  }


  ngOnInit(): void {
    this.beginForm();

  }


  beginForm() {
    this.fgValidator = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(11)]]
    });
  }


  async beginSession() {

         this.isActivar = true ;
    try {
      if (this.fgValidator.invalid) {
       this.showError1();
          
      }

      else {
        this.user.email = this.fgv.email.value;
        this.user.pass = this.fgv.password.value;

         this.serviceAuth.loggin(this.user).subscribe((data: any) => {

          this.user.token = data.data.token;
          this.serviceAuth.Autenticar(this.user.email, this.user.token);
            setTimeout(() => {
               this.isActivar = false ;
            }, 800);
          this.showSuccess(); 
              
        }, error => {
         
          setTimeout(() => {
            this.isActivar = false ;
         }, 800);

         this.showError();
        })
      }

    }

    catch (e) {
      this.showError();
    }

  }


  get fgv() {
    return this.fgValidator.controls;
  }

  showSuccess() {
    this.toastr.success('Bienvendio a MVP', 'Boots MVP', {
      timeOut: 1000
    });
  }
  
  showError() {
    this.toastr.error('Ha ocurrido un error , revise sus credenciales ', 'Boots MVP', {
      timeOut: 1000
    });
  }

  showError1() {
    this.toastr.error('Relle los datos del formulario correctamente.... ', 'Boots MVP', {
      timeOut: 1000
    });
  }

}
