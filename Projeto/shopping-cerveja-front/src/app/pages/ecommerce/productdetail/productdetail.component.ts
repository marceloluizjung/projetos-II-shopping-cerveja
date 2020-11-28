import { StoService } from './../../../core/services/sto.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Produto } from "src/app/core/models/produto.models";
import { ProdutoService } from "src/app/core/services/produto.service";
import Swal from 'sweetalert2';

@Component({
  selector: "app-productdetail",
  templateUrl: "./productdetail.component.html",
  styleUrls: ["./productdetail.component.scss"],
})

/**
 * Product-detail component - handling the product-detail with sidebar and content
 */
export class ProductdetailComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;
  productData: any = {};
  constructor(
    private productService: ProdutoService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private stoService: StoService
  ) {}

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [
      { label: "Dellis", path: "/" },
      { label: "eCommerce", path: "/" },
      { label: "Detalhes do Produto", path: "/", active: true },
    ];

    /**
     * fetches data
     */
    this._fetchData();
  }

  /**
   * onclick Image show
   * @param event image passed
   */
  imageShow(event) {
    const image = event.target.src;
    const expandImg = document.getElementById(
      "expandedImg"
    ) as HTMLImageElement;
    expandImg.src = image;
  }

  /**
   * fethces product value
   */
  private _fetchData() {
    this.productService
      .getProductById(this.activatedRoute.snapshot.params["id"])
      .subscribe((response) => {
        this.productData = response;
        if(this.productData.quantidade == 0) this.productData.quantityPurchased = 0;
        else this.productData.quantityPurchased = 1;
      });
      this.stoService.getImagesByOwner(this.activatedRoute.snapshot.params["id"]).subscribe(response => { 
        this.productData.imagemPrincipal = response[0].replaceAll("//", "/");
        this.productData.imagens = [];
        response.forEach(imagem => { 
          this.productData.imagens.push(imagem.replaceAll("//", "/"));
        });
      });
  }

  private addToCart() {
    var cartItemsStorage: any = localStorage.getItem("cartItems");
    if (!cartItemsStorage) {
      cartItemsStorage = [];
      cartItemsStorage.push(this.productData);
      Swal.fire('Adicionado!', 'Item adicionado ao carrinho!', 'success');
      localStorage.setItem("cartItems", JSON.stringify(cartItemsStorage));
    } else {
      cartItemsStorage = JSON.parse(localStorage.getItem("cartItems"));
      var itemFinder = cartItemsStorage.find(item => {
        return item.id == this.productData.id;
      });
      if (!itemFinder) {
        cartItemsStorage.push(this.productData);
        Swal.fire('Adicionado!', 'Item adicionado ao carrinho!', 'success');
        localStorage.setItem("cartItems", JSON.stringify(cartItemsStorage));
      }
    }


  }
}
