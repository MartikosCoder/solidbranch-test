import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as json_data from 'src/assets/data.json';

interface Name {
  first: String;
  last: String;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  data = json_data;

  filtered_data: any = [];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const types = ['income', 'outcome', 'loan', 'investment'];

    this.route.queryParams.subscribe(params => {
      if(!Object.keys(params).includes('tab')) this.router.navigate(['/']);
      
      const tab = +params['tab'];
      if(isNaN(tab) || tab < 0 || tab > 3) this.router.navigate(['/']);

      this.filtered_data = this.data.data.filter(item => item.type === types[tab]);
    });
  }

  getFullName(name_obj: Name): String {
    return `${name_obj?.first} ${name_obj?.last}`;
  }

}
