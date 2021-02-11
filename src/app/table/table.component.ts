import { CdkVirtualScrollViewport } from "@angular/cdk/scrolling";
import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { PElement, TableDataSource } from "./table.models";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit, AfterViewInit {
  displayedColumns = ["position", "name", "weight"];
  data: PElement[] = this._getElements(1000);
  dataSource = new TableDataSource();
  headerTop = "0px";

  @ViewChild(CdkVirtualScrollViewport) viewPort: CdkVirtualScrollViewport;

  constructor() {}

  ngOnInit() {
    this.dataSource.data = this.data;
  }

  ngAfterViewInit(): void {
    if (!!this.viewPort) {
      this.viewPort["_scrollStrategy"].onRenderedOffsetChanged = () =>
        (this.headerTop = `-${this.viewPort.getOffsetToRenderedContentStart()}px`);
    }
  }

  onScrollIndexChange(index: number) {
    this.dataSource.updateScrollTop(index);
  }

  private _getElements(size: number): PElement[] {
    let elements = [];
    for (let i = 0; i < size; i++) {
      elements.push({
        position: i,
        name: `Element n°${i}`,
        weight: Math.random() * 5
      });
    }
    return elements;
  }
}
