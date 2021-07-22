import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MInfraestructuraService } from 'src/app/Services/m-infraestructura.service';

@Component({
  selector: 'app-detalle-metrologia',
  templateUrl: './detalle-metrologia.component.html',
  styleUrls: ['./detalle-metrologia.component.css']
})
export class DetalleMetrologiaComponent implements OnInit {

   isloading :boolean ;
   id:string ;
   elem:any  ;
  constructor(public activeroute: ActivatedRoute , public services:MInfraestructuraService) { }
    

  ngOnInit(): void {

    this.isloading = true ;
        this.services.getByIdMetrologi(this.activeroute.snapshot.params.id).subscribe((res:any) => {
          this.elem = JSON.stringify(res.data);
          console.log(res.data.name);
         setTimeout(()=>{
          this.isloading = false ;
         },800)
        })
        
  }

 

}
