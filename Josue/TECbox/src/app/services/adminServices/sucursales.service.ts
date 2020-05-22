import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {

  constructor(private http: HttpClient) { }

  ingresar(nombre, provincia, canton, distrito, senas, telefono, encargado) {

    return this.http.post('http://localhost:3000/administracion_sucursales', { nombre: nombre, direccion: {provincia: provincia, canton: canton, distrito: distrito, senas : senas}, telefono : telefono , encargado : encargado }).subscribe(
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

    return this.http.delete('http://localhost:3000/administracion_sucursales/' + id).subscribe(
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

  modificar(id, nombre, provincia, canton, distrito, senas, telefono, encargado) {
    return this.http.put('http://localhost:3000/administracion_sucursales/' + id, { nombre: nombre, direccion: { provincia: provincia, canton: canton, distrito: distrito, senas: senas }, telefono: telefono, encargado: encargado}).subscribe(
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


