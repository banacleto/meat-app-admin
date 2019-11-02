import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order-component/order.component';

@NgModule({
    declarations: [OrderComponent],
    imports: [CommonModule, OrderRoutingModule]
})
export class OrderModule { }