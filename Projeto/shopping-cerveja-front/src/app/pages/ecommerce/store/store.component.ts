import { Component, OnInit } from "@angular/core";
import { productData } from '../products/data';
import { Produto } from "../../../core/models/produto.models";

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
   productData: Produto[];
 
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
     //this.productData = productData;
   }
}
