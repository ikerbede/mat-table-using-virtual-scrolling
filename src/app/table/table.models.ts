import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, of, Subscription } from "rxjs";
import { map, switchMap } from "rxjs/operators";

export interface Element {
  position: number;
  name: string;
  weight: number;
}

export class TableDataSource extends DataSource<Element> {
  data = new BehaviorSubject<Element[]>(this._getElements(1000));

  private _subscriptions: Subscription[] = [];

  connect(collectionViewer: CollectionViewer): Observable<Element[]> {
    return collectionViewer.viewChange.pipe(
      switchMap(range =>
        this.data.pipe(map(elts => elts.slice(range.start, range.end)))
      )
    );
  }

  disconnect() {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
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
