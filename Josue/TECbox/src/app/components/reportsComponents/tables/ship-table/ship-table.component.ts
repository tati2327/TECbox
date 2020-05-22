import { Component, OnInit } from '@angular/core';
import{ShipDataService} from 'src/app/services/reportsServices/ship-data.service';
import { ShipData } from 'src/app/models/reportsModels/ship-data';
//import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-ship-table',
  templateUrl: './ship-table.component.html',
  styleUrls: ['./ship-table.component.css']
})
export class ShipTableComponent implements OnInit {

  shipDataList: ShipData[]=[]

  /**public downloadPDF(){
    const doc= new jsPDF();
    doc.fromHTML(document.getElementById('conntent'), 10,10);
    doc.save('table.pdf');
  }**/

  constructor(private shipDataService: ShipDataService) { }

  ngOnInit(): void {
    this.shipDataService.getShipData().subscribe((shipData) => {
      this.shipDataList = shipData;
    })
 }

}
