import { Component, OnInit } from '@angular/core';
import {MessengerService} from 'src/app/services/clientServices/messenger.service';
import { Client } from 'src/app/models/clientModels/client'
import { RegisterService } from 'src/app/services/clientServices/register.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  client: Client;
  constructor(private register: RegisterService) { }

  ingresar(nombre, cedula, correo, casillero, celular, casa, provincia, canton, distrito, senas, usuario, password) {
    return this.register.ingresar(nombre.value, cedula.value, correo.value, casillero.value, celular.value, casa.value, provincia.value, canton.value, distrito.value, senas.value, usuario.value, password.value);
  }
  

  borrar(id) {
    return this.register.borrar(id.value);
  }
  ngOnInit(): void {

  }
}
