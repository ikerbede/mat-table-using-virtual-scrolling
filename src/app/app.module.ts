import { ScrollingModule } from "@angular/cdk/scrolling";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { AppComponent } from "./app.component";
import { TableComponent } from "./table/table.component";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ScrollingModule,
    MatSortModule,
    MatTableModule
  ],
  declarations: [AppComponent, TableComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
