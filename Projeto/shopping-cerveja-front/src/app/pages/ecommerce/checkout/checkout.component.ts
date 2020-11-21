import { Component, OnInit } from '@angular/core';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../form/validation/validation.mustmatch';
import { Compra } from '../../../core/models/compra.models';
import { UserProfileService } from '../../../core/services/user.service';
import { CookieService } from '../../../core/services/cookie.service';

import Swal from 'sweetalert2';
import { VendaService } from '../../../core/services/venda.service';
import { User } from '../../../core/models/auth.models';
import { Produto } from '../../../core/models/produto.models';
import { Cliente } from '../../../core/models/cliente.models';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})

/**
 * Orders component: handling the orders with sidebar and content
 */
export class CheckoutComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  term: any;
  ordersData: Compra[];
  // page number
  page = 1;
  // default page size
  pageSize = 10;
  // total number of records
  totalRecords = 0;

  // start and end index
  startIndex = 1;
  endIndex = 10;

  currentUser: User;

  constructor(private formBuilder: FormBuilder, private userProfileService: UserProfileService, 
    private vendaService: VendaService, private cookieService: CookieService) { }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'UBold', path: '/' }, { label: 'eCommerce', path: '/' }, { label: 'Orders', path: '/', active: true }];

    this.currentUser = JSON.parse(this.cookieService.getCookie('currentUser'));

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
    this.ordersData = this.ordersData.slice(this.startIndex - 1, this.endIndex - 1);
  }
  /**
   * fetches the orders value
   */
  private _fetchData() {
    this.userProfileService.listarCompras(10)
    .subscribe(
      data => {
        this.ordersData = data;
        this.totalRecords = data.length;
      },
      error => {
        console.log(error);
      });
    
  }

  basicSubmit() {
    Swal.fire({
      title: 'Confirmação',
      text: 'Deseja finalizar a compra?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Finalizar'
    }).then((result) => {
      
      if (result.value) {

        let compra = new Compra();

        let cliente = new Cliente();
        cliente.id = 10;
        compra.cliente = cliente;

        compra.dataCriacao = new Date();
        compra.valor = 10;

        let produto = new Produto();
        produto.id = 3;
        
        compra.produtos = [];
        compra.produtos.push(produto)

        this.vendaService.efetuarVenda(compra).subscribe(
          data => {
            Swal.fire('Confirmada!', 'Sua compra foi confirmada.', 'success');
          },
          error => {
            console.log(error);
          });
      }
    });
  }

}
