import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipped-view',
  templateUrl: './shipped-view.component.html',
  styleUrls: ['./shipped-view.component.css']
})
export class ShippedViewComponent implements OnInit {

  constructor() { }

  getTextBoxVal(filter1,filter2){
    console.log(filter1.value + " " +filter2.value)
  }

  ngOnInit(): void {
  }

}
