import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  imports: [CommonModule],
  templateUrl: './attribute-directives.html',
  styleUrl: './attribute-directives.css',
})
export class AttributeDirectives {
  favColor: string = 'green'
  myStyle = {
    'color': 'blue',
    'font-size': '20px',
    'background-color': 'lightgray'
  }

  myClasses = {
    'myclass1': true,
    'myclass2': false
  }
}
