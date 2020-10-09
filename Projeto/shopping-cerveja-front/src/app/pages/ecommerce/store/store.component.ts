import { Products } from './../products/products.model';
import { Component, OnInit } from "@angular/core";
import { productData } from '../products/data';

@Component({
  selector: "app-store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.scss"],
})

/**
 * Products component - handling the products with sidebar and content
 */
export class StoreComponent implements OnInit {
   // bread crumb items
   breadCrumbItems: Array<{}>;
   term: any;
   productData: Products[];
 
   constructor() { }
 
   ngOnInit() {
     // tslint:disable-next-line: max-line-length
     this.breadCrumbItems = [{ label: 'UBold', path: '/' }, { label: 'eCommerce', path: '/' }, { label: 'Products', path: '/', active: true }];
 
     /**
      * fetches data
      */
     this._fetchData();
   }
 
   /**
    * fetches product values
    */
   private _fetchData() {
     this.productData = productData;
   }
}
