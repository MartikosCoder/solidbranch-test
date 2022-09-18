import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.scss']
})
export class SummaryCardComponent implements OnInit {

  @Input() amount!: Number;
  @Input() title!: String;
  @Input() tab!: Number;  

  constructor() { }

  ngOnInit(): void {
  }

}
