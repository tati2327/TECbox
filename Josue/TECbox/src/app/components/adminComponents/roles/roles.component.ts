import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/services/adminServices/roles.service'
import { MessengerService } from 'src/app/services/clientServices/messenger.service'
import { Product } from 'src/app/models/clientModels/product'


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})

export class RolesComponent {

  constructor(private roles: RolesService,
    private msg: MessengerService
  ) {
   }

  ingresar(name, descrip) {
    console.log(name.value + descrip.value);
    this.roles.ingresar(name.value ,descrip.value);
  }

  modificar(id,name,descrip) {
    this.roles.modificar(id.value, name.value,descrip.value);
  }

  eliminar(id) {
    this.roles.borrar(id.value);

  }

  ngOnInit(): void {

  }
}
