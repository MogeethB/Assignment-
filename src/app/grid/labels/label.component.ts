import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../../services/app-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map, startWith, switchMap } from 'rxjs/operators';
import { merge, Subject } from 'rxjs';
import { Label } from '../../services/fake-backend-service.service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
})
export class LabelComponent implements OnInit {
  displayedColumns: string[] = ['name', 'count'];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  // activePage = 0;
  selectedRow: Label;
  resultsLength = 0;
  data: Label[];

  search: Subject<string> = new Subject<string>();
  searchVal: string;

  constructor(private appservice: AppService) {}

  // sortPage(check: string) {
  //   if (this.sorts == "a") {
  //     this.elementstoDisplay = this.elementstoDisplay.sort((a, b) => (a.first > b.first) ? 1 : -1);
  //     this.sorts = "d";
  //   } else {
  //     this.elementstoDisplay = this.elementstoDisplay.sort((a, b) => (a.first < b.first) ? 1 : -1);
  //     this.sorts = "a";
  //   }

  ngOnInit() {
    merge(this.sort.sortChange, this.paginator.page, this.search)
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.appservice.getLabels(
            this.searchVal,
            this.sort.direction,
            this.paginator.pageIndex,
            this.paginator.pageSize
          );
        }),
        map((data) => {
          this.resultsLength = data.total_count;

          return data.items;
        })
      )
      .subscribe((results) => {
        this.data = results;
        if (this.selectedRow) {
          const row = this.data.find((d) => d.id == this.selectedRow.id);
          if (row) this.selectedRow = row;
          else this.data = [this.selectedRow].concat(this.data);
        }
      });
  }

  selectRow(row: any) {
    this.selectedRow = row;
    this.displayedColumns = ['name'];
  }

  unSelectRow() {
    this.selectedRow = null;
    this.displayedColumns = ['name', 'count'];
  }

  startSearch() {
    this.search.next(this.searchVal);
  }
}
