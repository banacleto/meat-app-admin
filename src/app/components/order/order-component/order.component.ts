import { Component, OnInit } from '@angular/core';
import { ColumnMode } from 'projects/swimlane/ngx-datatable/src/public-api';
import { Order } from 'src/app/shared/models/order/order.model';
import { Page } from 'src/app/shared/models/pagination/page';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  page = new Page();

  ColumnMode = ColumnMode;
  columns: any[] = [
    { name: 'ID', prop: '_id' }, { name: 'Nome', prop: 'name' }, { name: 'e-Mail', prop: 'email' },
    { name: 'Endereço', prop: 'address' }, { name: 'Número', prop: 'number' },
    { name: 'Forma de Pagamento', prop: 'paymentOption' }
  ];
  rows = new Array<Order>();

  constructor(private orderService: OrderService) {
    this.page.pageNumber = 0;
    this.page.size = 10;
  }

  ngOnInit() {
    this.setPage({ offset: 0 });
  }

  /**
   * Populate the table with new data based on the page number
   * @param page The page to select
   */
  setPage(pageInfo) {
    this.page.pageNumber = pageInfo.offset;
    this.orderService.orders(this.page).subscribe(pagedData => {
      this.page = pagedData.page;
      this.rows = pagedData.data;
    });
  }

  onActivate(event) {
    if (event.type == 'click') {
      console.log(event.row);
    }
  }

}
