import { Component, OnInit } from '@angular/core';
import { RastreoPaqService } from '../../../services/bodegaServices/rastreo-paquetes.service';


@Component({
  selector: 'app-rastreo-paquetes',
  templateUrl: './rastreo-paquetes.component.html',
  styleUrls: ['./rastreo-paquetes.component.css']
})
export class RastreoPaquetesComponent implements OnInit {

  constructor(private rastreo: RastreoPaqService) { }

  ngOnInit(): void {
  }

  ingresar(id, estado) {
    return this.rastreo.ingresar(id.value, estado.value);
  }

  modificar(id, estado) {
    return this.rastreo.modificar(id.value, estado.value);

  }

  borrar(id) {
    return this.rastreo.borrar(id.value);

  }

}
