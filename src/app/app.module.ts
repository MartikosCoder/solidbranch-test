import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SummaryComponent } from './summary/summary.component';
import { SummaryCardComponent } from './summary-card/summary-card.component';

@NgModule({
  declarations: [
    SummaryComponent,
    SummaryCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [SummaryComponent]
})
export class AppModule { }
