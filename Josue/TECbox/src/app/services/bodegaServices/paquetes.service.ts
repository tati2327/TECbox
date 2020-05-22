import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/clientModels/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaquetesService {

  constructor(private http: HttpClient) { }

  ingresar(cliente, descripcion, fecha) {

    return this.http.post('http://localhost:3000/bodeguero_paquetes', { cliente: cliente, descripcion: descripcion, fecha_estimada: fecha }).subscribe(
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

    return this.http.delete('http://localhost:3000/bodeguero_paquetes/' + id).subscribe(
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

  modificar(id, cliente, descripcion, fecha) {
    return this.http.put('http://localhost:3000/bodeguero_paquetes/' + id, { cliente: cliente, descripcion: descripcion, fecha_estimada: fecha }).subscribe(
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


