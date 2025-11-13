import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { AddItem } from "./add-item/add-item";
import { ListItems } from "./list-items/list-items";

@Component({
  selector: 'app-root',
  imports: [ AddItem, ListItems],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-service-demo');
}
