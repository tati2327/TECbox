import { Component, OnInit } from '@angular/core';
import { RutasService } from 'src/app/services/adminServices/rutas.service'

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {

  constructor(private ruta: RutasService) { }

  ngOnInit(): void {
  }

  ingresar(nameRoute, ruta) {
    return this.ruta.ingresar(nameRoute.value, ruta.value);

  }

  modificar(id,nameRoute, ruta) {
    return this.ruta.modificar(id.value,nameRoute.value, ruta.value);

  }

  borrar(id) {
    return this.ruta.borrar(id.value);

  }

}
