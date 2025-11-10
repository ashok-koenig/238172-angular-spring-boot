import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Todo {
  todoItems: string[] = []

  addItem(item: string):void{
    this.todoItems.push(item)
  }

  getItems(): string[]{
    return this.todoItems;
  }
}
