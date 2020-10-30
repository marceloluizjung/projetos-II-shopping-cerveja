import { Component, OnInit } from '@angular/core';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../form/validation/validation.mustmatch';
import { Compra } from '../../../core/models/compra.models';
import { UserProfileService } from '../../../core/services/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})

/**
 * Orders component: handling the orders with sidebar and content
 */
export class OrdersComponent implements OnInit {

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
  basicFormvalidation: FormGroup; // basic form validation
  basicsubmit: boolean;

  constructor(private formBuilder: FormBuilder, private userProfileService: UserProfileService) { }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.breadCrumbItems = [{ label: 'UBold', path: '/' }, { label: 'eCommerce', path: '/' }, { label: 'Orders', path: '/', active: true }];

    /**
     * fetches data
     */
    this._fetchData();

    this.basicFormvalidation = this.formBuilder.group({
      user: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpwd: ['', Validators.required],
    }, {
        validator: MustMatch('password', 'confirmpwd'),
      });
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
    this.basicsubmit = true;
  }


  get basic() {
    return this.basicFormvalidation.controls;
  }
}
