import { DataSource } from "@angular/cdk/collections";
import { BehaviorSubject, Observable, of } from "rxjs";

export interface Element {
  position: number;
  name: string;
  weight: number;
}

export class TableDataSource extends DataSource<Element> {
  data = new BehaviorSubject<Element[]>(this._getElements(1000));

  connect(): Observable<Element[]> {
    return this.data;
  }

  disconnect() {}

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
