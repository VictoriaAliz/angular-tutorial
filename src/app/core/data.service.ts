import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ICustomer, IOrder } from '../shared/interfases';

@Injectable()
export class DataService {

    baseUrl: string = 'assets/';
    customersUrl: string = 'customers.json';
    ordersUrl: string = 'orders.json';
    
    constructor(private http: HttpClient) { }

    getCustomers() : Observable<ICustomer[]> {
        return this.http
          .get<ICustomer[]>(`${this.baseUrl}${this.customersUrl}`)
          .pipe(catchError(this.handleError));
    }
    
    getCustomer(id: number) : Observable<ICustomer> {
      return this.http
        .get<ICustomer[]>(`${this.baseUrl}${this.customersUrl}`)
        .pipe(
          map(customers => {
            const customer = customers.filter((cust: ICustomer) => cust.id === id);
            return (customer && customer.length) ? customer[0] : null;
          }),
          catchError(this.handleError)
        )
    }

    getOrders(id: number) : Observable<IOrder[]> {
      return this.http.get<IOrder[]>(`${this.baseUrl}${this.ordersUrl}`)
        .pipe(
          map(orders => {
            const custOrders = orders.filter((order: IOrder) => order.customerId === id);
            return custOrders;
          }),
          catchError(this.handleError)
        );
    }
    
    private handleError(error: any) {
      return Observable.throw(error || 'Server error');
    }
}