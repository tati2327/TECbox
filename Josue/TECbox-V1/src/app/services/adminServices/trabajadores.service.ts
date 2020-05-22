import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrabajadoresService {

  constructor(private http: HttpClient) { }

  ingresar(numero_cedula, nombre, primer_apellido, segundo_apellido, fecha_nacimiento, sucursal, salario_mes, salario_hora) {

    return this.http.post('http://localhost:3000/administracion_trabajadores', { numero_cedula: numero_cedula, nombre_completo: { nombre: nombre, primer_apellido: primer_apellido, segundo_apellido: segundo_apellido }, fecha_nacimiento: fecha_nacimiento, sucursal: sucursal, salario_mes: salario_mes, salario_hora: salario_hora }).subscribe(
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

    return this.http.delete('http://localhost:3000/administracion_trabajadores/' + id).subscribe(
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

  modificar(id, numero_cedula, nombre, primer_apellido, segundo_apellido, fecha_nacimiento, sucursal, salario_mes, salario_hora) {
    return this.http.put('http://localhost:3000/administracion_trabajadores/' + id, { numero_cedula: numero_cedula, nombre_completo: { nombre: nombre, primer_apellido: primer_apellido, segundo_apellido: segundo_apellido }, fecha_nacimiento: fecha_nacimiento, sucursal: sucursal, salario_mes: salario_mes, salario_hora: salario_hora  }).subscribe(
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


