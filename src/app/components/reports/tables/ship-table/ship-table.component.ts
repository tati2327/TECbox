import { Component, OnInit } from '@angular/core';
import{ShipDataService} from 'src/app/services/ship-data.service';
import { ShipData } from 'src/app/models/ship-data';

@Component({
  selector: 'app-ship-table',
  templateUrl: './ship-table.component.html',
  styleUrls: ['./ship-table.component.css']
})
export class ShipTableComponent implements OnInit {

  shipDataList: ShipData[]=[]

  constructor(private shipDataService: ShipDataService) { }

  ngOnInit(): void {
    this.shipDataList=this.shipDataService.getShipData()
  }

}
