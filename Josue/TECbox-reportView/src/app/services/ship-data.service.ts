import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShipData } from 'src/app/models/ship-data'

const apiUrl = 'http://localhost:3000/reportes_entregados';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShipDataService {
  
  /*shipData =[
    new ShipData(1,3512,"Juanito Mora",21/78/69),

  ]*/
  constructor(private http: HttpClient) { }

  getShipData(): Observable<ShipData[]> {
    return this.http.get<ShipData[]>(apiUrl);
  }
}
