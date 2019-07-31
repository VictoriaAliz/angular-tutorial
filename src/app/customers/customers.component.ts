import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/data.service';
import { ICustomer } from '../shared/interfases';

@Component({
    selector: 'app-customers',
    template: `
        <h1>{{title}}</h1>
        <app-customers-list [customers]="people"></app-customers-list>    
    `
})
export class CustomersComponent implements OnInit {
    title: string;
    people: any[];
    
    constructor(private dataService: DataService) {}
    
    ngOnInit() {
        this.title = 'Customers';
        this.dataService
            .getCustomers()
            .subscribe((customers: ICustomer[]) => this.people = customers);
    }

}
