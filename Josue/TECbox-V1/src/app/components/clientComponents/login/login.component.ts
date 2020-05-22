import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  client;
  pwd;
  constructor() { }

  ngOnInit(): void {
  }

  getClient(){
    localStorage.setItem('username', JSON.stringify((<HTMLInputElement>document.getElementById("username")).value));
    localStorage.setItem('pwd', JSON.stringify((<HTMLInputElement>document.getElementById("pwd")).value));
    console.log(localStorage.getItem('username'));
    console.log(localStorage.getItem('pwd'));
  }


}
