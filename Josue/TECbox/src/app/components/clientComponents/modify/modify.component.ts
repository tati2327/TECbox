import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/clientModels/client';
import { RegisterService } from 'src/app/services/clientServices/register.service'
@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {

 

  constructor(private register: RegisterService) { }

  modificar(id, nombre, cedula, correo, casillero, celular, casa, provincia, canton, distrito, senas, usuario, password) {
    return this.register.modificar(id.value, nombre.value, cedula.value, correo.value, casillero.value, celular.value, casa.value, provincia.value, canton.value, distrito.value, senas.value, usuario.value, password.value);
  }

  ngOnInit(): void {
  }

 
}
