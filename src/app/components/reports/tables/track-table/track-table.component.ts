import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import{TrackDataService} from 'src/app/services/track-data.service';
import { TrackData } from 'src/app/models/track-data';
import * as jsPDF from 'jspdf';


@Component({
  selector: 'app-track-table',
  templateUrl: './track-table.component.html',
  styleUrls: ['./track-table.component.css']
})
export class TrackTableComponent implements OnInit {

  trackDataList: TrackData[]=[]

  public downloadPDF(){
    const doc= new jsPDF(); 
    doc.fromHTML(document.getElementById('conntent'), 10,10);
    doc.save('table.pdf');
  }

  constructor(private trackDataService: TrackDataService) { }

  ngOnInit(): void {
    this.trackDataList=this.trackDataService.getTrackData()
  }
}
