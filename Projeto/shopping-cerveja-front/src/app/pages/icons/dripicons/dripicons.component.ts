import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dripicons',
  templateUrl: './dripicons.component.html',
  styleUrls: ['./dripicons.component.scss']
})

/**
 * Dripicons component - handling the Dripicons icon with sidebar and content
 */
export class DripiconsComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'UBold', path: '/' }, { label: 'Icons', path: '/' }, { label: 'Dripicons', path: '/', active: true }];

  }
}
