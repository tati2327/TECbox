import { Injectable } from '@angular/core';
import {Report} from 'src/app/models/report';
@Injectable({
  providedIn: 'root'
})
export class ReportService {

  reports : Report[] = [
    new Report(1, 'Report 1', 'This is a Report description.', "Alajuela"),
    new Report(2, 'Report 2', 'This is a Report description.', 'costado sur parque central'),
    new Report(3, 'Report 3', 'This is a Report description.', 'oficinas del pacifico'),
    new Report(4, 'Report 4', 'This is a Report description.', 'en ruta'),
    new Report(5, 'Report 5', 'This is a Report description.', 'en ruuta'),
    new Report(6, 'Report 6', 'This is a Report description.', 'en checkout'),
    new Report(7, 'Report 7', 'This is a Report description.', 'delivered'),
  ]

  constructor() { }

  getReports(): Report[]{
    //ESTOS Report DEBEN OBTENERSE DEL API (observable)
    return this.reports;
  }
}
