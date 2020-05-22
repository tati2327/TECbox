import { Component, OnInit } from '@angular/core';
import {Client} from 'src/app/models/clientModels/client';
@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {

  dropDown;
  selected='';
  target;
  newEntry='';
  newInfo: Client;
  loggedClient = localStorage.getItem('username');

  constructor() { }

  ngOnInit(): void {
  }

  targetedChange(){
   this.dropDown = (<HTMLSelectElement>document.getElementById("targeted"));
    this.selected = this.dropDown.options[this.dropDown.selectedIndex].text;
    this.newEntry = (<HTMLInputElement>document.getElementById("newEntry")).value;
    this.newInfo = this.APIChange(this.selected, this.newEntry);
  }

  //CUANDO HAGO UHN CAMBIO EL API ME RETORNA EL OBJETO CLIENTE
  APIChange(choice, newEntry): Client{
    // MANDAR AL API EL CHOICE + <HTMLInputElement>document.getElementById("newEntry").text
    // USAR EL LOGGEDCLIENT PARA BUSCAR CUAL CLIENTE ES
    // new Client(obtener del api)
    if(choice == 'Username'){
      localStorage.setItem('username', newEntry);
    }
    if(choice == 'Password'){
      localStorage.setItem('password', newEntry);
    }
    return
  }
}
