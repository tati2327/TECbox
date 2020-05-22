import { Injectable } from '@angular/core';
import { Report } from 'src/app/models/clientModels/report';
import { Product } from 'src/app/models/clientModels/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:3000/cliente_rastreo';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  getReports(id): Observable<Report> {
    return this.http.get<Report>(apiUrl+'/'+id);
  }
  
}
