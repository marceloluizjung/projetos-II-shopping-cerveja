import { Products } from './../products/products.model';
import { Component, OnInit } from '@angular/core';
import { storeData } from './data';
import { Stores } from './stores.model';
import { productData } from './../products/data';

@Component({
  selector: 'app-products',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})

/**
 * Products component - handling the products with sidebar and content
 */
export class StoresComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  term: any;
  storeData: Stores[];
  productsData: Products[];
  public shoppingSelected = "Lojas"; 

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'UBold', path: '/' }, { label: 'eCommerce', path: '/' }, { label: 'Products', path: '/', active: true }];

    /**
     * fetches data
     */
    this.storeData = storeData;
    this.productsData = productData;
  }

  public shoppingMode(shoppingSelected: any)  {
    this.shoppingSelected = shoppingSelected;
  }
}
