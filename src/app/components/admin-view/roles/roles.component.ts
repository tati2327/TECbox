import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})

export class RolesComponent implements OnInit {

  ingresar(name, descrip){
    console.log(name.value+descrip.value);
  }

  modificar(){

  }

  eliminar(){

  }

  ngOnInit(): void {

  }
}
