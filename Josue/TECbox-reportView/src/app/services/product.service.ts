import { Injectable } from '@angular/core';
import {Product} from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {



  products : Product[] = [
    new Product(1, 'Product 1', 'This is a product description.', 100, ''),
    new Product(2, 'Product 2', 'This is a product description.', 200, ''),
    new Product(3, 'Product 3', 'This is a product description.', 300, ''),
    new Product(4, 'Product 4', 'This is a product description.', 400, ''),
    new Product(5, 'Product 5', 'This is a product description.', 500, ''),
    new Product(6, 'Product 6', 'This is a product description.', 600, ''),
    new Product(7, 'Product 7', 'This is a product description.', 700, ''),
  ]

  constructor() { }

  getProducts(): Product[]{
    //ESTOS PRODUCTOS DEBEN OBTENERSE DEL API (observable)
    return this.products;
  }
}
