import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';

@Injectable()
export class OrderService {

    constructor(private http: HttpClient) { }

    orders(): Observable<Order[]> {
        return this.http.get<Order[]>('https://localhost:3000/api/orders');   
    }
}
