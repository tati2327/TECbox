import { Injectable } from '@angular/core';
import {ShipData} from 'src/app/models/ship-data'


@Injectable({
  providedIn: 'root'
})
export class ShipDataService {
  
  shipData =[
    new ShipData(1,3512,"Juanito Mora",'21/78/69'),

  ]

  constructor() { }
  getShipData(): ShipData[]{
    //Populate salesData from an API and return and Observable
    return this.shipData 
  }
}
