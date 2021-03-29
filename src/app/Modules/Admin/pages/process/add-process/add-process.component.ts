import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder ,Validators } from '@angular/forms';
import { Process } from '../../../../../Models/process';
import { ProcessServices } from '../../../../../Services/ProcessServices';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-process',
  templateUrl: './add-process.component.html',
  styleUrls: ['./add-process.component.css']
})
export class AddProcessComponent implements OnInit {

    process:Process = new Process ;
      fgFrom: FormGroup ;
      
  constructor(private fb:FormBuilder , private srevice:ProcessServices , private route:Router ) { }

  ngOnInit(): void {
    this.beginForm();
  }

   hola(){
      this.process.name = this.fgFrom.controls.name.value ;
      this.process.description = this.fgFrom.controls.descriptions.value;
       //console.log(this.fgFrom.controls.descriptions.value);
             this.srevice.getAddProcess(this.process).subscribe(res => {});
           this.route.navigateByUrl("/admin/process/listProcess");
      
            this.ngOnDestroy();
               
   }


   beginForm() {
    this.fgFrom = this.fb.group({
      name: ['', [Validators.required]],
       descriptions: ['' , [Validators.required]]
    });
  }

  ngOnDestroy(): void {
    
  }



}


