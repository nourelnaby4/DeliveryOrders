import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from '../service/orderDetails.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private srevice:OrderDetailsService) { }
foodData:any;
  ngOnInit(): void {
this.foodData=this.srevice.foodData;
  }

}
