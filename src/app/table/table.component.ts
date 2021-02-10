import { Component, OnInit } from "@angular/core";
import { TableDataSource } from "./table.models";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {
  displayedColumns = ["position", "name", "weight"];
  dataSource = new TableDataSource();

  constructor() {}

  ngOnInit() {}
}
