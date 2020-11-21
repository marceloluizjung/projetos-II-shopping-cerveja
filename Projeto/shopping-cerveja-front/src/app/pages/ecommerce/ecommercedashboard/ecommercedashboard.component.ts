import { VendedorService } from './../../../core/services/vendedor.service';
import { Component, OnInit } from '@angular/core';

import { Widget, Transaction, Products, ChartType } from './dashboard.model';

import { widgetData, transactionData, productData, revenueAreaChart } from './data';
import { CookieService } from 'src/app/core/services/cookie.service';

@Component({
  selector: 'app-ecommercedashboard',
  templateUrl: './ecommercedashboard.component.html',
  styleUrls: ['./ecommercedashboard.component.scss']
})

/**
 * Ecommerce-dashboard component - handling the ecommerce-dashboard with sidebar and content
 */
export class EcommercedashboardComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  widgetData: Widget[];
  transactionData: Transaction[];
  productData: Products[];
  revenueAreaChart: ChartType;
  private currentUser;

  constructor(private vendedorService: VendedorService, private cookieService: CookieService) { }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'UBold', path: '/' }, { label: 'eCommerce', path: '/' }, { label: 'Dashboard', path: '/', active: true }];
    this.currentUser = JSON.parse(this.cookieService.getCookie('currentUser'));
    this.vendedorService.getVendedorById(this.currentUser.id).subscribe(response => {
      debugger;
    });
    /**
     * fetches data
     */
    this._fetchData();
  }

  /**
   * fetches the ecommerce dashboard values
   */
  private _fetchData() {
    this.widgetData = widgetData;
    this.transactionData = transactionData;
    this.productData = productData;
    this.revenueAreaChart = revenueAreaChart;
  }
}
