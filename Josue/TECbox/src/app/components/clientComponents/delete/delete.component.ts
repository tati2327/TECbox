import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/clientServices/register.service'
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private register: RegisterService) { }

  ngOnInit(): void {
  }

  borrar(id) {
    return this.register.borrar(id.value);
  }

}
