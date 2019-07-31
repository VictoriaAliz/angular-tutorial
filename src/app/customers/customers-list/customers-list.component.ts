import { Component, OnInit, Input } from '@angular/core';
import { SorterService } from '../../core/sorter.service';

import { ICustomer } from '../../shared/interfases';

@Component ({
    selector: 'app-customers-list', 
    templateUrl: './customers-list.component.html'
})

export class CustomersListComponent implements OnInit {
    private _customers: ICustomer[] = [];

    @Input() set customers(value: ICustomer[]) {
        if(value) {
            this.filteredCustomers = this._customers = value;
            this.calculateOrders();
        }
        else{
            this.filteredCustomers = this._customers = [];
        }
    }

    filteredCustomers: ICustomer[] = [];
    customersOrderTotal: number;
    currencyCode: string = 'USD';

    constructor(private sorterService: SorterService) {}

    ngOnInit() {}

    calculateOrders() {
        this.customersOrderTotal = 0;
        this.filteredCustomers.forEach((cust: ICustomer) => {
            this.customersOrderTotal += cust.orderTotal;
        });
    } 

    filter(data: string) {
        if (data) {
            this.filteredCustomers = this._customers.filter((cust: ICustomer) => {
                return cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
                       cust.orderTotal.toString().indexOf(data) > -1;
            });
            this.calculateOrders();
        } else {
            this.filteredCustomers = this._customers;
        }
    }

    sort(prop: string) {
        console.log(prop);
        this.sorterService.sort(this.filteredCustomers, prop);
    }
}