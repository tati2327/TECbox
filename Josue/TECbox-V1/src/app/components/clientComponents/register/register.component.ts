import { Component, OnInit } from '@angular/core';
import {MessengerService} from 'src/app/services/clientServices/messenger.service';
import {Client} from 'src/app/models/clientModels/client'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  client: Client;
  constructor(private msg: MessengerService) { }

  registerClient(): Client{

    localStorage.setItem('username', JSON.stringify((<HTMLInputElement>document.getElementById("username")).value));
    var e = (<HTMLSelectElement>document.getElementById("provincia"));
    var strUser = e.options[e.selectedIndex].text;
    return this.client = new Client(
      (<HTMLInputElement>document.getElementById("name")).value,
      (<HTMLInputElement>document.getElementById("cedula")).value,
      (<HTMLInputElement>document.getElementById("mail")).value,
      (<HTMLInputElement>document.getElementById("locker")).value,
      (<HTMLInputElement>document.getElementById("cel")).value,
      (<HTMLInputElement>document.getElementById("tel")).value,
      strUser,
      (<HTMLInputElement>document.getElementById("canton")).value,
      (<HTMLInputElement>document.getElementById("distrito")).value,
      (<HTMLInputElement>document.getElementById("dir")).value,
      (<HTMLInputElement>document.getElementById("username")).value,
      (<HTMLInputElement>document.getElementById("password")).value
       )
  }




  ngOnInit(): void {
  }
}
