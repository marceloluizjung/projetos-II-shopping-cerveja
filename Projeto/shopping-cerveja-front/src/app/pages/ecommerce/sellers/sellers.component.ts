import { Component, OnInit } from '@angular/core';

import { Vendedor } from '../../../core/models/vendedor. models';
import { VendedorService } from '../../../core/services/vendedor.service';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.scss']
})

/**
 * Sellers component: handling the sellers with sidebar and content
 */
export class SellersComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  term: any;
  sellersData: Vendedor[];
  // page number
  page = 1;
  // default page size
  pageSize = 10;
  // total number of records
  totalRecords = 0;

  // start and end index
  startIndex = 1;
  endIndex = 10;
  constructor(private vendedorService: VendedorService) { }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'UBold', path: '/' }, { label: 'eCommerce', path: '/' }, { label: 'Sellers', path: '/', active: true }];

    /**
     * fetches data
     */
    this._fetchData();
  }
  /**
   * Handle on page click event
   */
  onPageChange(page: any): void {
    this.startIndex = (page - 1) * this.pageSize + 1;
    this.endIndex = (page - 1) * this.pageSize + this.pageSize;
    if (this.endIndex > this.totalRecords) {
      this.endIndex = this.totalRecords;
    }
    this.sellersData = this.sellersData.slice(this.startIndex - 1, this.endIndex - 1);
  }

  /**
   * fetches the sellers value
   */
  private _fetchData() {
    

    this.vendedorService.listarVendedores()
      .subscribe(
        data => {
          this.sellersData = data;
          this.totalRecords = data.length;
        },
        error => {
          console.log(error);
        });
  }
}
