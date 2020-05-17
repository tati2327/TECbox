import { Component, OnInit } from '@angular/core';
import{SalesDataService} from 'src/app/services/sales-data.service'
import { SalesData } from 'src/app/models/sales-data';


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  salesDataList: SalesData[]=[]

  constructor(private salesDataService: SalesDataService) { }

  ngOnInit(): void {
    this.salesDataList=this.salesDataService.getSalesData()
  }

}
