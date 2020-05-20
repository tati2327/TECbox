import { Injectable } from '@angular/core';
import { TrackData } from '../models/track-data';


@Injectable({
  providedIn: 'root'
})
export class TrackDataService {

  trackData =[
    new TrackData(1, 321 ,"San Isidro","entregado"),

  ]

  constructor() { }

  getTrackData(): TrackData[]{
    //Populate salesData from an API and return and Observable
    return this.trackData 
  }
}
