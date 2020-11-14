import { VendedorService } from "./../../../core/services/vendedor.service";
import { ActivatedRoute } from "@angular/router";
import { ProdutoService } from "src/app/core/services/produto.service";
import { Component, OnInit } from "@angular/core";
import { Produto } from "../../../core/models/produto.models";
import { Vendedor } from "src/app/core/models/vendedor. models";

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
  private breadCrumbItems: Array<{}>;
  private term: any;
  private productData: Produto[];
  private seller: Vendedor;

  constructor(
    private produtoService: ProdutoService,
    private activatedRoute: ActivatedRoute,
    private vendedorService: VendedorService
  ) {}

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [
      { label: "UBold", path: "/" },
      { label: "eCommerce", path: "/" },
      { label: "Products", path: "/", active: true },
    ];
    this.vendedorService
      .getVendedorById(this.activatedRoute.snapshot.params["id"])
      .subscribe((response) => {
        this.seller = response;
      });

    /**
     * fetches data
     */
    this._fetchData();
  }

  /**
   * fetches product values
   */
  private _fetchData() {
    this.produtoService.listarProdutosByVendedor(this.activatedRoute.snapshot.params["id"]).subscribe((response) => {
      this.productData = response;
    });
  }
}
