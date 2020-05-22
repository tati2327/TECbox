import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SalesData } from 'src/app/models/reportsModels/sales-data'

const apiUrl = 'http://localhost:3000/reportes_mas_vendidos';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesDataService {

  /*salesData =[
    new SalesData(1,'pan',21/78/69),

  ]*/

  constructor(private http: HttpClient) { }

  getSalesData(): Observable<SalesData[]> {
    return this.http.get<SalesData[]>(apiUrl);
  }
}
