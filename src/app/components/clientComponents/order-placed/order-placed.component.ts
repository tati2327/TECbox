import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.css']
})
export class OrderPlacedComponent implements OnInit {

  username = '';
  trackId = 1288;
  estimatedDate = "8 junio 2020";
  constructor() { }

  ngOnInit(): void {
  }

  orderToServer(){
    this.username = JSON.parse(window.localStorage.getItem('cartItems'));(window.localStorage.getItem('cartItems'));
    // AQUI SE CREA PAQUETE CON TRACK ID, USERNAME Y FECHA
  }

}
