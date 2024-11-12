import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule}   from "@angular/forms";

class Item{
  purchase: string;
  done: boolean;
  price: number;
  constructor(_purchase: string, _price: number)
  {
    this.purchase = _purchase;
    this.price = _price;
    this.done = false;
  }
  clear()
  {
    this.price = 0;
    this.purchase = "";
    this.done = false;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  styleUrl: './app.component.css',
  templateUrl: './app.component.html'
})



export class AppComponent {
@Input() text: string = "";
@Output() textChange = new EventEmitter<String>();



price: number = 0;
total_price: number = 0;
items: Item[] = [];

changeNameEvent():void {
this.text = "";
this.price = 0;
this.textChange.emit(this.text);

}

addItem(text: string,price: number): void 
{
  if(text == null || text.trim() == "" || price == null)
    return;
  this.items.push(new Item(text, price));
  
}
clear(text:string, price:number)
{
text = "";
}  
clickCheck(event:Event, item:Item)
{
  if(item.done == true)
    {
      this.total_price += item.price
    }
  else 
    {
      this.total_price -= item.price
    }
  } 
}
