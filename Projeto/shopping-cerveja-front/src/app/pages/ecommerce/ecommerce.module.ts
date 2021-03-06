import { CurrencyMaskModule } from 'ng2-currency-mask';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { UIModule } from '../../shared/ui/ui.module';

import { FileUploadModule } from '@iplab/ngx-file-upload';
import { NgbPaginationModule, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { SellersComponent } from './sellers/sellers.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProducteditComponent } from './productedit/productedit.component';
import { EcommercedashboardComponent } from './ecommercedashboard/ecommercedashboard.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { StoreComponent } from './store/store.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [SellersComponent, OrdersComponent, ProductsComponent, ProductdetailComponent, ProducteditComponent, EcommercedashboardComponent, ShoppingComponent, StoreComponent, CheckoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    EcommerceRoutingModule,
    UIModule,
    FileUploadModule,
    NgbPaginationModule,
    NgbProgressbarModule,
    NgApexchartsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    CurrencyMaskModule
  ]
})
export class EcommerceModule { }
