import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../../../Services/Auth';
import { User } from '../../../../Models/User';

import { ToastrService } from 'ngx-toastr';


declare const modalmenssage: any;

@Component({ 
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {


  user: User = new User();
  fgValidator: FormGroup;

  constructor(private fb: FormBuilder, private serviceAuth: AuthService , private toastr:ToastrService) {

  }


  ngOnInit(): void {
    this.beginForm();

  }


  beginForm() {
    this.fgValidator = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }


  async beginSession() {
 
    try {
      if (this.fgValidator.invalid) {
        modalmenssage("Relle los datos del formulario correctamente....");
      }

      else {
        this.user.email = this.fgv.email.value;
        this.user.pass = this.fgv.password.value;
    
        await this.serviceAuth.loggin(this.user).subscribe((data: any) => {
          this.user.token = data.data.token;
          this.serviceAuth.Autenticar(this.user.email, this.user.token);
              this.showSuccess();
        } , error => {
          modalmenssage("Ha ocurrido un error con sus Credenciales pro favor revize las misma....");
        })
      }

    }

    catch (e) {
      modalmenssage("Ha ocurrido un error al tratar de enviar los datos , por favor revise con detenimiento sus Datos");
    }

  }


  get fgv() {
    return this.fgValidator.controls;
  }

  showSuccess() {
    this.toastr.success('Bienvendio a MVP', 'Boots MVP' , {
       timeOut:3000
    });
  }

}
