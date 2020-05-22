import { Injectable } from '@angular/core';
import {Client} from 'src/app/models/clientModels/client'
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  client = new Client("María José",2079544444,"maria@gmail.com",2399,8977736,24335274, "Alajuela", "Alajuela","San Jose","El Coyol","mjosezam","1234");


  constructor() { }

  getClient(): Client{
    return this.client;
  }
}
