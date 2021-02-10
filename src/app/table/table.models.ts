import { DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { map, switchMap } from "rxjs/operators";

export interface Element {
  position: number;
  name: string;
  weight: number;
}

export class TableDataSource extends DataSource<Element> {
  data = new BehaviorSubject<Element[]>(this._getElements(10000));

  private _scrollTop = new BehaviorSubject<number>(0);
  private _subscriptions: Subscription[] = [];

  connect(): Observable<Element[]> {
    return this._scrollTop.pipe(
      switchMap(value =>
        this.data.pipe(
          map(elts => {
            const start = Math.max(0, value - 5);
            const end = Math.min(elts.length, value + 30);
            return elts.slice(start, end);
          })
        )
      )
    );
  }

  disconnect() {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  updateScrollTop(value: number) {
    this._scrollTop.next(value);
  }

  private _getElements(size: number): Element[] {
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
