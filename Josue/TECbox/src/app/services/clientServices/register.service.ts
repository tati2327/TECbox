import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/clientModels/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  

  ingresar(nombre, cedula, correo, casillero, celular, casa, provincia, canton, distrito, senas, usuario, password) {

    return this.http.post('http://localhost:3000/cliente_cliente', { nombre: nombre, cedula: cedula, correo: correo, casillero: casillero, telefono: { celular: celular, casa: casa }, direccion: { provincia: provincia, canton: canton, distrito: distrito, senas: senas }, usuario:usuario, password:password }).subscribe(
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

    return this.http.delete('http://localhost:3000/cliente_cliente/' + id).subscribe(
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

  modificar(id, nombre, cedula, correo, casillero, celular, casa, provincia, canton, distrito, senas, usuario, password) {
    return this.http.put('http://localhost:3000/cliente_cliente/' + id, { nombre: nombre, cedula: cedula, correo: correo, casillero: casillero, telefono: { celular: celular, casa: casa }, direccion: { provincia: provincia, canton: canton, distrito: distrito, senas: senas }, usuario: usuario, password: password }).subscribe(
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


