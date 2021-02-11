import { MatTableDataSource } from "@angular/material/table";
import { BehaviorSubject } from "rxjs";

export interface PElement {
  position: number;
  name: string;
  weight: number;
}

export class TableDataSource<T> extends MatTableDataSource<T> {
  BUFFER_SIZE = 5;
  RANGE_SIZE = 30;

  private _dataStream = new BehaviorSubject<T[]>([]);

  connect(): BehaviorSubject<T[]> {
    return this._dataStream;
  }

  disconnect() {}

  updateScrollTop(value: number) {
    const start = Math.max(0, value - this.BUFFER_SIZE);
    const end = Math.min(this.data.length, value + this.RANGE_SIZE);
    this._dataStream.next(this.data.slice(start, end));
  }
}
