import { Component, OnInit } from '@angular/core';
import { ColumnMode } from 'projects/swimlane/ngx-datatable/src/public-api';
import { CorporateEmployee } from 'src/app/shared/models/pagination/corporate-employee';
import { Page } from 'src/app/shared/models/pagination/page';
import { MockServerResultsService } from 'src/app/shared/services/mock-server-results-service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  page = new Page();
  rows = new Array<CorporateEmployee>();

  ColumnMode = ColumnMode;

  constructor(private serverResultsService: MockServerResultsService) {
    this.page.pageNumber = 0;
    this.page.size = 10;
  }

  ngOnInit() {
    this.setPage({ offset: 0 });
  }

  /**
   * Populate the table with new data based on the page number
   * @param page The page to select
   */
  setPage(pageInfo) {
    this.page.pageNumber = pageInfo.offset;
    this.serverResultsService.getResults(this.page).subscribe(pagedData => {
      this.page = pagedData.page;
      this.rows = pagedData.data;
    });
  }
  
}
