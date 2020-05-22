import { Component, OnInit } from '@angular/core';
import{SalesDataService} from 'src/app/services/reportsServices/sales-data.service'
import { SalesData } from 'src/app/models/reportsModels/sales-data';
//import * as jsPDF from 'jspdf';



@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  salesDataList: SalesData[]=[]

  /**public downloadPDF(){
    const doc= new jsPDF();
    doc.fromHTML(document.getElementById('conntent'), 10,10);
    doc.save('table.pdf');
  }**/

  constructor(private salesDataService: SalesDataService) { }

  ngOnInit(): void {
    this.salesDataService.getSalesData().subscribe((SalesData) => {
      this.salesDataList = SalesData;
    })
  }

}
