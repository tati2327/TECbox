import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  ingresar(nameProduct, barCode, nameSeller, productDescrip, price, impuesto, descuento) {

    return this.http.post('http://localhost:3000/administracion_productos', { nombre: nameProduct, codigo_barras: barCode, vendedor: nameSeller, productos: productDescrip, precio: price, impuesto: impuesto, descuento: descuento }).subscribe(
      (val) => {
        console.log("POST call successful value returned in body",
          response => {
            console.log("POST call in error", response);
          },
          () => {
            console.log("The POST observable is now completed.");
          });
      });
        }
  borrar(id) {

    return this.http.delete('http://localhost:3000/administracion_productos/' + id).subscribe(
      (val) => {
        console.log("DELETE call successful value returned in body",
          val);
      },
      response => {
        console.log("DELETE call in error", response);
      },
      () => {
        console.log("The DELETE observable is now completed.");
      });
  }

  modificar(id, nameProduct, barCode, nameSeller, productDescrip, price, impuesto, descuento) {
    return this.http.put('http://localhost:3000/administracion_productos/' + id, { nombre: nameProduct, codigo_barras: barCode, vendedor: nameSeller, productos: productDescrip, precio: price, impuesto: impuesto, descuento: descuento }).subscribe(
      (val) => {
        console.log("PUT call successful value returned in body",
          val);
      },
      response => {
        console.log("PUT call in error", response);
      },
      () => {
        console.log("The PUT observable is now completed.");
      });

  }

}


