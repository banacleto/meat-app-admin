import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { OrderComponent } from './order-component/order.component';
import { OrderRoutingModule } from './order-routing.module';

@NgModule({
    declarations: [OrderComponent],
    imports: [CommonModule, OrderRoutingModule, NgxDatatableModule]
})
export class OrderModule { }
