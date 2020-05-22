import { Component, OnInit } from '@angular/core';
import { FiltersComponent } from 'src/app/components/clientComponents/shopping-cart/filters/filters.component';

@Component({
  selector: 'app-sales-view',
  templateUrl: './sales-view.component.html',
  styleUrls: ['./sales-view.component.css'],

})
export class SalesViewComponent implements OnInit {

  getTextBoxVal(filter1,filter2){
    console.log(filter1.value + " " +filter2.value)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
