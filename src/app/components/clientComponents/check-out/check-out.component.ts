import { Component, OnInit } from '@angular/core';
import {MessengerService} from 'src/app/services/clientServices/messenger.service';

import { Product } from 'src/app/models/clientModels/product';
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  checkoutItems = [
    //{id: 1, productId: 1, productName: 'Test 1', qty: 5, price: 100},
    //{id: 2, productId: 2, productName: 'Test 2',qty: 2, price: 50},
    //{id: 3, productId: 3, productName: 'Test 3',qty: 1, price: 200},
    //{id: 4, productId: 4, productName: 'Test 4',qty: 3, price: 70},
    //{id: 5, productId: 5, productName: 'Test 5',qty: 4, price: 10},
  ];

  cartTotal = 0;
  checkoutTotal = 0;
  discount = 20;
  tax = 13;

  constructor() { }

  ngOnInit(): void {
    this.checkoutItems = JSON.parse(window.localStorage.getItem('cartItems'));
    console.log(this.checkoutItems);
    this.generateReceipt();
  }


  generateReceipt(){

    this.cartTotal = 0;
    this.checkoutItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
      })
    this.checkoutTotal =
      (this.cartTotal -
        (this.cartTotal*(this.discount/100)) +
        (this.cartTotal*(this.tax/100)));
    }




}
