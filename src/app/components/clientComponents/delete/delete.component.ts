import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  deleteAccount(){
    localStorage.removeItem('username');
    localStorage.removeItem('pwd');
    console.log(localStorage.getItem('username'));
  }


}
