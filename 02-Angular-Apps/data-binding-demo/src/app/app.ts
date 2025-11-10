import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Interpolation } from "./interpolation/interpolation";
import { PropertyBinding } from "./property-binding/property-binding";
import { EventBinding } from "./event-binding/event-binding";
import { TwoWayBinding } from "./two-way-binding/two-way-binding";

@Component({
  selector: 'app-root',
  imports: [Interpolation, PropertyBinding, EventBinding, TwoWayBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('data-binding-demo');
}
