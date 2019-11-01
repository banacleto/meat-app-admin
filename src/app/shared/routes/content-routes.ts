import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: 'orders',
    loadChildren: './components/orders/orders.module#OrdersModule'
  }
];