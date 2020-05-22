import { Component, OnInit } from '@angular/core';
import { TrabajadoresService } from 'src/app/services/adminServices/trabajadores.service'

@Component({
  selector: 'app-trabajadores',
  templateUrl: './trabajadores.component.html',
  styleUrls: ['./trabajadores.component.css']
})
export class TrabajadoresComponent implements OnInit {

  constructor(private trabajador: TrabajadoresService) { }

  ngOnInit(): void {
  }

  ingresar(cedula, name, FirstLastName, secondLastName, dateBorn, sucursal, salaryMonth) {
    return this.trabajador.ingresar(cedula.value, name.value, FirstLastName.value, secondLastName.value, dateBorn.value, sucursal.value, salaryMonth.value, (salaryMonth.value/150));

  }

  modificar(id,cedula, name, FirstLastName, secondLastName, dateBorn, sucursal, salaryMonth) {
    return this.trabajador.modificar(id.value,cedula.value, name.value, FirstLastName.value, secondLastName.value, dateBorn.value, sucursal.value, salaryMonth.value, (salaryMonth.value / 150));

  }

  borrar(id) {
    return this.trabajador.borrar(id.value);

  }

}
