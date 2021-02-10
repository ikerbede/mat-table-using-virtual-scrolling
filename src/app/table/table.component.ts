import { CdkScrollable, ScrollDispatcher } from "@angular/cdk/overlay";
import { Component, OnInit } from "@angular/core";
import { filter, map } from "rxjs/operators";
import { TableDataSource } from "./table.models";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  displayedColumns = ["position", "name", "weight"];
  dataSource = new TableDataSource();

  constructor(public scrollDispatcher: ScrollDispatcher) {}

  ngOnInit() {
    this.scrollDispatcher
      .scrolled()
      .pipe(
        map(
          (scrollable: CdkScrollable) =>
            scrollable.getElementRef().nativeElement.scrollTop
        ),
        filter(scrollTop => !!scrollTop)
      )
      .subscribe(scrollTop => this.dataSource.updateScrollTop(scrollTop));
  }
}
