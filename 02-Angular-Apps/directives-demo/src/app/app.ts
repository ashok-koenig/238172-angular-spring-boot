import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { StructuralDirectives } from "./structural-directives/structural-directives";
import { AttributeDirectives } from "./attribute-directives/attribute-directives";
import { Highlight } from "./custom-directives/highlight";

@Component({
  selector: 'app-root',
  imports: [StructuralDirectives, AttributeDirectives, Highlight],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('directives-demo');
}
