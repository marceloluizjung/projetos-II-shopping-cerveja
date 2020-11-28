import { Component, OnInit } from '@angular/core';

import { ProdutoService } from '../../../core/services/produto.service';
import { Produto } from '../../../core/models/produto.models';
import { CookieService } from 'src/app/core/services/cookie.service';
import { StoService } from 'src/app/core/services/sto.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

/**
 * Products component - handling the products with sidebar and content
 */
export class ProductsComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  term: any;
  productData: Produto[];
  private currentUser;

  constructor(private produtoService: ProdutoService, private cookieService: CookieService, private stoService: StoService) { }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'Dellis', path: '/' }, { label: 'eCommerce', path: '/' }, { label: 'Produtos', path: '/', active: true }];

    this.currentUser = JSON.parse(this.cookieService.getCookie('currentUser'));

    /**
     * fetches data
     */
    this._fetchData();
  }

  /**
   * fetches product values
   */
  private _fetchData() {
    this.produtoService.listarProdutos()
      .subscribe(
        data => {
          data.forEach(product => { 
            this.stoService.getImagesByOwner(product.id).subscribe(response => { 
              product.imagem = response[0].replaceAll("//", "/");
            });
          });
          this.productData = data;
        },
        error => {
          console.log(error);
        });
  }
}
