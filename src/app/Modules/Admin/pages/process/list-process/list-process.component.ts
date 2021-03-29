import { Component, OnInit } from '@angular/core';
import { ProcessServices } from '../../../../../Services/ProcessServices';
import { Process } from '../../../../../Models/process';

@Component({
  selector: 'app-list-process',
  templateUrl: './list-process.component.html',
  styleUrls: ['./list-process.component.css']
})
export class ListProcessComponent implements OnInit {

    list:Process[] =[];
     process:Process = new Process;
     activa:boolean = true ;

  constructor(private service:ProcessServices ) { }

  ngOnInit() {
   this.service.getAllProcess().subscribe( (data:any)=>{
       this.list = data.data
  });

  }

  ngAfterContentChecked(): void {
    this.ngOnInit();
  
      }
      ngAfterViewInit(): void {
  
     this.ngOnInit();
      }
  
   isAcitve(){
     return (this.list.length == 0) ? true : false ;
   } 
 

  delete_id(id:string){
     this.service.deleteProcess(id).subscribe(res => {});
  }
   



}
