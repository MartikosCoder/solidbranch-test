import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SummaryComponent } from './summary/summary.component';
import { SummaryCardComponent } from './summary-card/summary-card.component';
import { ListComponent } from './list/list.component';
import { RootComponent } from './root/root.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [
    SummaryComponent,
    SummaryCardComponent,
    ListComponent,
    RootComponent,
    ListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
