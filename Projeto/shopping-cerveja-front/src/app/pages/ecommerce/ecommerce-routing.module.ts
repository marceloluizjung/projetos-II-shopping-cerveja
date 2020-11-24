import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellersComponent } from './sellers/sellers.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ProducteditComponent } from './productedit/productedit.component';
import { EcommercedashboardComponent } from './ecommercedashboard/ecommercedashboard.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { StoreComponent } from './store/store.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
    {
        path: 'sellers',
        component: SellersComponent
    },
    {
        path: 'orders',
        component: OrdersComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'product-detail/:id',
        component: ProductdetailComponent
    },
    {
        path: 'product-edit/:id',
        component: ProducteditComponent
    },
    {
        path: 'product-new',
        component: ProducteditComponent
    },
    {
        path: 'ecommerce-dashboard',
        component: EcommercedashboardComponent
    },
    {
        path: 'shopping',
        component: ShoppingComponent
    },
    {
        path: 'store/:id',
        component: StoreComponent
    },
    {
        path: 'checkout',
        component: CheckoutComponent
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EcommerceRoutingModule {}
