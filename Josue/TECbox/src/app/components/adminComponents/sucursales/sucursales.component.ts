import { Component, OnInit } from '@angular/core';
import { SucursalesService } from 'src/app/services/adminServices/sucursales.service'

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

  modificar(id,nameSucursal, telephone, encargado, province, canton, district, senas) {
    return this.sucursal.modificar(id.value, nameSucursal.value, province.value, canton.value, district.value, senas.value, telephone.value, encargado.value);

  }

  borrar(id) {
    return this.sucursal.borrar(id.value);

  }

}
