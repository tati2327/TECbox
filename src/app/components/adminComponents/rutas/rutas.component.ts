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

  modificar(nameRoute, ruta) {
    return this.ruta.modificar(2,nameRoute.value, ruta.value);

  }

  borrar() {
    return this.ruta.borrar(1);

  }

}
