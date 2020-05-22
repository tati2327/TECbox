import { Component, OnInit } from '@angular/core';
import {ReportService} from 'src/app/services/clientServices/report.service';
import {Report} from 'src/app/models/clientModels/report';
import { MessengerService } from 'src/app/services/clientServices/messenger.service';
@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})

export class TrackComponent implements OnInit {

  reportList: Report;
  
  constructor(private reportService: ReportService) { }

  populateReports(id) {
    this.reportService.getReports(id.value).subscribe((report) => {
      this.reportList = report;

    });
  }

  ngOnInit() {
    this.reportList.id = 0;
  }

}

