import { Injectable } from '@angular/core';
import{SalesData} from 'src/app/models/sales-data'

@Injectable({
  providedIn: 'root'
})
export class SalesDataService {

  salesData =[
    new SalesData(1,'pan',21/78/69),

  ]

  constructor() { }

  getSalesData(): SalesData[]{
    //Populate salesData from an API and return and Observable
    return this.salesData
  }
}
