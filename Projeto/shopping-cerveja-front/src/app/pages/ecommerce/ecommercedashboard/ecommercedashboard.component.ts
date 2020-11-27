import { Component, OnInit } from "@angular/core";
import { forkJoin } from "rxjs";
import { map } from "rxjs/operators";
import { CookieService } from "src/app/core/services/cookie.service";
import { ProdutoService } from "src/app/core/services/produto.service";
import { VendasService } from "src/app/core/services/vendas.service";
import { ChartType, Products, Transaction, Widget } from "./dashboard.model";
import { productData, transactionData } from "./data";

@Component({
  selector: "app-ecommercedashboard",
  templateUrl: "./ecommercedashboard.component.html",
  styleUrls: ["./ecommercedashboard.component.scss"],
})

/**
 * Ecommerce-dashboard component - handling the ecommerce-dashboard with sidebar and content
 */
export class EcommercedashboardComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  widgetData: Widget[];
  transactionData: any[];
  productData: Products[];
  revenueAreaChart: ChartType;
  private currentUser;

  constructor(
    private vendasService: VendasService,
    private produtoService: ProdutoService,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    this.breadCrumbItems = [
      { label: "Dellis", path: "/" },
      { label: "eCommerce", path: "/" },
      { label: "Dashboard Vendas", path: "/", active: true },
    ];
    this.currentUser = JSON.parse(this.cookieService.getCookie("currentUser"));
    forkJoin(
      this.vendasService.getVendasByVendedor(this.currentUser.id),
      this.produtoService.listarProdutosByVendedor(this.currentUser.id)
    )
      .pipe(
        map(([vendas, produtos]) => {
          return { vendas, produtos };
        })
      )
      .subscribe((response) => {
        this._fetchData(response);
      });
  }

  /**
   * fetches the ecommerce dashboard values
   */
  private _fetchData(data: any) {
    if (!this.transactionData) this.transactionData = [];
    let categories = [];
    let values = [];
    let faturamento = 0;
    data.vendas.forEach((element) => {
      faturamento += element.valor;
    });

    let produtos = 0;
    if (data.produtos && data.produtos.length) produtos = data.produtos.length;

    let vendas = 0;
    if (data.vendas && data.vendas.length) {
      vendas = data.vendas.length;

      data.vendas.forEach((element) => {
        debugger;
        element.bandeiraF = `assets/images/cards/${element.bandeira}.png`; 
        element.dataCriacaoF = new Date(element.dataCriacao).toLocaleString();
        if(this.transactionData.length < 10) this.transactionData.push(element);
        else {
          this.transactionData = this.transactionData.splice(1, 9);
          this.transactionData.push(element); 
        }
        let index = 0;
        let finder = categories.find((v) => {
          if (v.split("T")[0] == element.dataCriacao.split("T")[0]) return v;
          else index++;
        });
        if (!finder) {
          if (categories.length > 30) {
            debugger;
            categories = categories.splice(1, categories.length - 1);
            values = values.splice(1, values.length - 1);
          }
          categories.push(new Date(element.dataCriacao).toLocaleDateString());
          values.push(element.valor);
        } else {
          values[index] += element.valor;
        }
        index++;
      });
    }

    this.widgetData = [
      {
        icon: "dripicons-wallet",
        value: `R$ ${faturamento}`,
        title: "Faturamento",
        color: "primary",
      },
      {
        icon: "dripicons-basket",
        value: vendas,
        title: "Vendas",
        color: "success",
      },
      {
        icon: "dripicons-store",
        value: data.produtos.length,
        title: "My store",
        color: "info",
      },
    ];
    this.productData = productData;
    this.revenueAreaChart = {
      chart: {
        height: 430,
        type: "line",
        toolbar: {
          show: false,
        },
      },
      stroke: {
        curve: "smooth",
      },
      series: [
        {
          name: "R$",
          type: "area",
          data: values,
        },
      ],
      colors: ["#f1556c"],
      fill: {
        type: "solid",
        opacity: 0.2,
      },
      markers: {
        size: 0,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: categories,
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
    };
  }

  public getCardNumberMasked(card: number) {
      return `${card.toString().substring(0, 4)}-${card.toString().substring(4, 8)}-${card.toString().substring(8, 12)}-****`
  }
}
