import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/order.model';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orders: Order[]

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.orders().subscribe(orders => this.orders = orders)
  }

  edit(): void {
    console.log("clicou")
  }

}
