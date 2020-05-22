import { Component, OnInit } from '@angular/core';
import { PaquetesService } from '../../../services/bodegaServices/paquetes.service';
 
@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.css']
})
export class PaquetesComponent implements OnInit {

  constructor(private paquete: PaquetesService) { }

  ngOnInit(): void {
  }

  ingresar(client, productDescrip, dateDelivery) {
    return this.paquete.ingresar(client.value, productDescrip.value, dateDelivery.value);

  }

  modificar(id, client, productDescrip, dateDelivery) {
    return this.paquete.modificar(id.value, client.value, productDescrip.value, dateDelivery.value);
  }

  borrar(id) {
    return this.paquete.borrar(id.value);

  }

}
