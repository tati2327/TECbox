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

  modificar(name,descrip) {
    this.roles.modificar(2, name.value,descrip.value);
  }

  eliminar() {
    this.roles.borrar(1);

  }

  ngOnInit(): void {

  }
}
