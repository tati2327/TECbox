import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/clientModels/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  allow(id, user, pwd) {
    this.http.get('http://localhost:3000/cliente_cliente' + '/' + id);
    console.log(this.http.get('http://localhost:3000/cliente_cliente' + '/' + id));
  }

}


