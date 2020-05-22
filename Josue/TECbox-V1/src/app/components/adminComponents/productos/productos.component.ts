import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/adminServices/productos.service'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private producto: ProductosService
  ) { }

  ngOnInit(): void {
  }

  ingresar(nameProduct, barCode, nameSeller, productDescrip, price, impuesto, descuento) {
    this.producto.ingresar(nameProduct.value, barCode.value, nameSeller.value, productDescrip.value, price.value, impuesto.value, descuento.value);

  }

  modificar(nameProduct, barCode, nameSeller, productDescrip, price, impuesto, descuento) {
    this.producto.modificar(2, nameProduct.value, barCode.value, nameSeller.value, productDescrip.value, price.value, impuesto.value, descuento.value);
  }

  borrar() {
    this.producto.borrar(1);

  }

}
