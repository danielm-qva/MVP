import { Component, OnInit } from '@angular/core';
import { ProcessServices } from '../../../../../Services/ProcessServices';

@Component({
  selector: 'app-list-provider',
  templateUrl: './list-provider.component.html',
  styleUrls: ['./list-provider.component.css']
})
export class ListProviderComponent implements OnInit {

    
  constructor(private _services:ProcessServices) {

   }



   ngOnInit() {

  }



}
