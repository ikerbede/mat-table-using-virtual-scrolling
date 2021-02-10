import { Component, OnInit } from "@angular/core";
import { PElement, TableDataSource } from "./table.models";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  displayedColumns = ["position", "name", "weight"];
  data: PElement[] = this._getElements(1000);
  dataSource = new TableDataSource();

  constructor() {}

  ngOnInit() {
    this.dataSource.data = this.data;
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
