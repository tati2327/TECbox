import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/clientModels/product';
import { MessengerService } from 'src/app/services/clientServices/messenger.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product;
  constructor(private msg: MessengerService) { }

  ngOnInit() {

  }

  handleAddtoCart(){
    this.msg.sendMsg(this.productItem);
  }
}
