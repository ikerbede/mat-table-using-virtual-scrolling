import { DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";

export interface PElement {
  position: number;
  name: string;
  weight: number;
}

export class TableDataSource extends DataSource<PElement> {
  data: PElement[];

  private _scrollTop = new BehaviorSubject<number>(0);

  connect(): Observable<PElement[]> {
    return this._scrollTop.pipe(
      map(value => {
        const start = Math.max(0, value - 5);
        const end = Math.min(this.data.length, value + 30);
        return this.data.slice(start, end);
      })
    );
  }

  disconnect() {}

  updateScrollTop(value: number) {
    this._scrollTop.next(value);
  }
}
