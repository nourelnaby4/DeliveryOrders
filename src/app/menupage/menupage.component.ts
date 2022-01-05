import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from '../service/orderDetails.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:OrderDetailsService) { }
getMenuId:any;
order:any;
  ngOnInit(): void {
    this.getMenuId=this.param.snapshot.paramMap.get('id');
    if(this.getMenuId){
     this.order=this.service.foodData.find(x=>
      x.id==this.getMenuId);
    }
    console.log(this.order);
  }

}
