import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/clientModels/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendedoresService {

  constructor(private http: HttpClient) { }

  ingresar(nombre, cedula, tipo) {

    return this.http.post('http://localhost:3000/administracion_vendedores', { nombre: nombre, cedula: cedula, tipo: tipo }).subscribe(
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

    return this.http.delete('http://localhost:3000/administracion_vendedores/' + id).subscribe(
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

  modificar(id, nombre, cedula, tipo) {
    return this.http.put('http://localhost:3000/administracion_vendedores/' + id, { nombre: nombre, cedula: cedula, tipo: tipo }).subscribe(
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


