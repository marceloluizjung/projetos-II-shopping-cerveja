import { VendedorService } from "./../../../core/services/vendedor.service";
import { ActivatedRoute } from "@angular/router";
import { ProdutoService } from "src/app/core/services/produto.service";
import { Component, OnInit } from "@angular/core";
import { Produto } from "../../../core/models/produto.models";
import { Vendedor } from "src/app/core/models/vendedor. models";
import { StoService } from 'src/app/core/services/sto.service';

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
    private vendedorService: VendedorService,
    private stoService: StoService
  ) {}

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [
      { label: "Dellis", path: "/" },
      { label: "eCommerce", path: "/" },
      { label: "Loja", path: "/", active: true },
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
      response.forEach(product => {
        this.stoService.getImagesByOwner(product.id).subscribe(response => { 
          if(response && response[0]) product.imagem = response[0].replaceAll("//", "/");
        });
      });
      this.productData = response;
    });
  }
}
