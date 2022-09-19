import { Component, OnInit } from '@angular/core';
import * as json_data from 'src/assets/data.json';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  data = json_data;
  transaction_plural = this.data.total >= 1 ? 'transactions' : 'transaction';

  income_data = this.data.data.filter(item => item.type === 'income');
  outcome_data = this.data.data.filter(item => item.type === 'outcome');
  loan_data = this.data.data.filter(item => item.type === 'loan');
  investment_data = this.data.data.filter(item => item.type === 'investment');

  constructor() { }

  ngOnInit(): void {
  }

}
