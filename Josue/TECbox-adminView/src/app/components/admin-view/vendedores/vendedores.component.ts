import { Component, OnInit } from '@angular/core';
import { VendedoresService } from 'src/app/services/vendedores.service'

@Component({
  selector: 'app-vendedores',
  templateUrl: './vendedores.component.html',
  styleUrls: ['./vendedores.component.css']
})
export class VendedoresComponent implements OnInit {

  constructor(private vendedor: VendedoresService) { }

  ngOnInit(): void {
  }

  ingresar(nameSeller, cedula, tipo) {
    return this.vendedor.ingresar(nameSeller.value, cedula.value, tipo.value);

  }

  modificar(nameSeller, cedula, tipo) {
    return this.vendedor.modificar(2, nameSeller.value, cedula.value, tipo.value);

  }

  borrar() {
    return this.vendedor.borrar(1);

  }

}
