import { Component, OnInit } from '@angular/core';
import { Produto } from '../../../core/models/produto.models';
import { VendedorService } from './../../../core/services/vendedor.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})

/**
 * Products component - handling the products with sidebar and content
 */
export class ShoppingComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  term: any;
  storeData: any;
  productsData: Produto[];
  public shoppingSelected = "Lojas"; 

  constructor(private vendedorService: VendedorService) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Dellis', path: '/' }, { label: 'eCommerce', path: '/' }, { label: 'Lojas', path: '/', active: true }];

    /**
     * fetches data
     */
    this.vendedorService.listarVendedores().subscribe((response: any) =>{
      this.storeData = response;
      this.storeData.forEach(element => {
        element.notaStar = [];
        for(let cont = 0; cont < element.nota; cont++) {
          element.notaStar.push({nota: cont})
        }
      });
    });
  }

  public shoppingMode(shoppingSelected: any)  {
    this.shoppingSelected = shoppingSelected;
  }
}
