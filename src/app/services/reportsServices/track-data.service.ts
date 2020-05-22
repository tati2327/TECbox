import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TrackData } from 'src/app/models/reportsModels/track-data';

const apiUrl = 'http://localhost:3000/reportes_tracking';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TrackDataService {

  /*trackData =[
    new TrackData(1,3214,"San Isidro","entregado"),

  ]*/


  constructor(private http: HttpClient) { }

  getTrackData(): Observable<TrackData[]> {
    return this.http.get<TrackData[]>(apiUrl);
  }
}
