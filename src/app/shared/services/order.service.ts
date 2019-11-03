import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Order } from '../models/order/order.model';
import { Page } from '../models/pagination/page';
import { PagedData } from '../models/pagination/paged-data';

@Injectable()
export class OrderService {

    constructor(private http: HttpClient) { }

    public orders(page: Page): Observable<PagedData<Order>> {
        return this.http.get<Order[]>('https://localhost:3000/api/orders').pipe(
            tap(order => console.log(order)),
            map(order => this.getPagedData(page, order))
        );
    }

    private getPagedData(page: Page, data: any[]): PagedData<Order> {
        const pagedData = new PagedData<Order>();
        page.totalElements = data.length;
        page.totalPages = page.totalElements / page.size;
        const start = page.pageNumber * page.size;
        const end = Math.min(start + page.size, page.totalElements);
        for (let i = start; i < end; i++) {
            const order = data[i];
            pagedData.data.push(order);
        }
        pagedData.page = page;
        return pagedData;
    }
}
