import { Component, OnInit } from '@angular/core';
import { SucursalesService } from 'src/app/services/sucursales.service'

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html',
  styleUrls: ['./sucursales.component.css']
})
export class SucursalesComponent implements OnInit {

  constructor(private sucursal: SucursalesService) { }

  ngOnInit(): void {
  }

  ingresar(nameSucursal, telephone, encargado, province, canton, district, senas) {
    return this.sucursal.ingresar(nameSucursal.value,  province.value, canton.value, district.value, senas.value, telephone.value, encargado.value);

  }

  modificar(nameSucursal, telephone, encargado, province, canton, district, senas) {
    return this.sucursal.modificar(2, nameSucursal.value, province.value, canton.value, district.value, senas.value, telephone.value, encargado.value);

  }

  borrar() {
    return this.sucursal.borrar(1);

  }

}
