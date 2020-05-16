import { Component, OnInit } from '@angular/core';
import {ReportService} from 'src/app/services/report.service';
import {Report} from 'src/app/models/report';
import { MessengerService } from 'src/app/services/messenger.service';
@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})

export class TrackComponent implements OnInit {

  reportList: Report[] = [];
  constructor(private reportService: ReportService) { }

  populateReports(){
    this.reportList = this.reportService.getReports();
  }

  ngOnInit() {

  }

}

