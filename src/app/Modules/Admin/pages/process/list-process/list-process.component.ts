import { Component, OnInit } from '@angular/core';
import { ProcessServices } from '../../../../../Services/ProcessServices';
import { Process } from '../../../../../Models/process';

@Component({
  selector: 'app-list-process',
  templateUrl: './list-process.component.html',
  styleUrls: ['./list-process.component.css']
})
export class ListProcessComponent implements OnInit {

    list:any ={};
     process:Process = new Process;

  

  constructor(private service:ProcessServices ) { }

 async ngOnInit() {
  await this.service.getAllProcess().subscribe( (data:any)=>{
       this.list = data.data
  } )

  }
 
 
   



}
