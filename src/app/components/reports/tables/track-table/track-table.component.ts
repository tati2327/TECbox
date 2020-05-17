import { Component, OnInit } from '@angular/core';
import{TrackDataService} from 'src/app/services/track-data.service';
import { TrackData } from 'src/app/models/track-data';


@Component({
  selector: 'app-track-table',
  templateUrl: './track-table.component.html',
  styleUrls: ['./track-table.component.css']
})
export class TrackTableComponent implements OnInit {

  trackDataList: TrackData[]=[]

  constructor(private trackDataService: TrackDataService) { }

  ngOnInit(): void {
    this.trackDataList=this.trackDataService.getTrackData()
  }
}
