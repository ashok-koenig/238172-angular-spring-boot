import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  imports: [],
  templateUrl: './structural-directives.html',
  styleUrl: './structural-directives.css',
})
export class StructuralDirectives {
  name: string = "John"
  age: number = 15

  friends: string[] = ["John", "Smith", "Peter", "Bob"]

  courses: string[] = []
}
