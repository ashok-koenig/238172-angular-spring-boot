import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  imports: [],
  templateUrl: './interpolation.html',
  styleUrl: './interpolation.css',
})
export class Interpolation {
  firstName: string = "John";
  lastName: string = "Smith";
  quantity: number = 5;
  price: number = 50;
}
