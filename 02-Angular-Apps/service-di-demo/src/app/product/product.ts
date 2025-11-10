import { Component } from '@angular/core';
import { Calculate } from '../services/calculate';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  title: string = 'Dell Laptop'
  quantity: number = 5
  price: number = 12345
  discount: number = 234
  total: number

  // Constructor injection
  constructor(private calculate: Calculate){
    this.total = calculate.totalCost(this.price, this.quantity, this.discount)
  }
}
