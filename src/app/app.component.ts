import { Component, OnInit } from '@angular/core';
import {LazyLoadEvent} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  data: any[];
  cols: any[];

  ngOnInit() {
    for (let i = 0; i < 200; i++) {
      this.data.push({ id: i, value: "Value " + i })
    }
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'value', header: 'Value' }
    ];
  }

  loadCarsLazy(event: LazyLoadEvent) {   
    console.log(event);
        
    //simulate remote connection with a timeout 
}


}
