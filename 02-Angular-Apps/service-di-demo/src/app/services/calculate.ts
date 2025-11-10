import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Calculate {
  totalCost(price: number, quantity: number, discount: number): number{
    return price * quantity - discount;
  }
}
