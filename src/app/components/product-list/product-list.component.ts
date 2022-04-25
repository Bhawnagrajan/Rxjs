import { Component, OnInit } from '@angular/core';
import{fromEvent} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
   products=[
{name:'Iphone',discription: "this is iphone" , Price: '100000'},
{name:'Galaxy',discription: "this is galaxy", Price: '70000'},
{name:'Samsung',discription: "this is samsung", Price: '34900'},
{name:'Pixel',discription: "this is pixel",Price: '70440'},

]
  constructor() { 
   
  }
  ngOnInit(): void {
  }
  public title= "title ";
  share(){
    console.log("component is shared")
  }

}


