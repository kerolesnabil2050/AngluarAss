import { Component, EventEmitter, Output } from '@angular/core';
import { Iproduct } from 'Shared Classes and types/iproduct';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  ProtectList:Iproduct[]=
  [
    {ID:1,Name:'product1',Quantity:50,Img:"assets/imges/9.jpg",Price:200},
    {ID:2,Name:'product2',Quantity:20,Img:"assets/imges/6.jpg",Price:400},
    {ID:3,Name:'product3',Quantity:30,Img:"assets/imges/7.jpg",Price:500},
  
  ];
@Output()
public childEvent =new EventEmitter
FireEvent()
{
this.childEvent.emit(this.ProtectList);
}
sayWelcome()
{
  return "I AM A child";
}
}
