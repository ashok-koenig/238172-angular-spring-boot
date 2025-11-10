import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.css',
})
export class PropertyBinding {
  linkUrl: string = "https://www.koenig-solutions.com";
  linkText: string = "Koenig Solutions";
  picSrc: string = "pic1.jpg"
  picWidth: number = 200
  isDisabled: boolean = true
}
