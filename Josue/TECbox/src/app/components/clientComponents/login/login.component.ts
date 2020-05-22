import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/clientServices/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  status=false;
  constructor(private log: LoginService) { }

  ngOnInit(): void {
  }

  getClient(id,username,pwd){
    this.log.allow(id.value, username.value, pwd.value);
    return this.status = true;
  }
  

}
