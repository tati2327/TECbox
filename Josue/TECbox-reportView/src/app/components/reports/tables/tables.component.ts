import { Component, OnInit } from '@angular/core';
import{SalesDataService} from 'src/app/services/sales-data.service'
import { SalesData } from 'src/app/models/sales-data';


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  salesHeaderList = ["Number", "Product", "Date"];
  salesDataList: SalesData[] = []

  constructor(private salesDataService: SalesDataService) { }

  ngOnInit(): void {
    this.salesDataService.getSalesData().subscribe((SalesData) => {
      this.salesDataList = SalesData;
    })
  }
}
