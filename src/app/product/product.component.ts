import { Component } from '@angular/core';
import { Discount } from 'Shared Classes and types/discount';
import { Iproduct } from 'Shared Classes and types/iproduct';
import { Icategory } from 'Shared Classes and types/icategory';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  constructor(){}

Discount=Discount.NoDiscount;
StoreName:string='Store_one';
StoreLogo:string='assets/imges/2.jpg';
ProtectList:Iproduct[]=
[
  {ID:1,Name:'product1',Quantity:50,Img:"assets/imges/2.jpg",Price:200},
  {ID:2,Name:'product2',Quantity:20,Img:"assets/imges/3.jpg",Price:400},
  {ID:3,Name:'product3',Quantity:30,Img:"assets/imges/4.jpg",Price:500},

];
CategoryList:Icategory[]=
[
{ID:1,Name:'Mens'},
{ID:2,Name:'Wommen'},
{ID:3,Name:'Child'}

];
ClientName:string='';
IsPurshases:boolean=true;

}
