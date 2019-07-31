import { CommonModule } from '@angular/common';
import { FormsModule }      from '@angular/forms';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CustomersComponent } from './customers.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textbox.components';

@NgModule({
  imports: [ CommonModule, SharedModule, FormsModule, CustomersRoutingModule ],
  declarations: [ CustomersComponent, CustomersListComponent, FilterTextboxComponent], 
  exports: [ CustomersComponent ]
})

export class CustomersModule { }
