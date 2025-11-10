import { Component } from '@angular/core';
import { Todo } from '../services/todo';

@Component({
  selector: 'app-list-items',
  imports: [],
  templateUrl: './list-items.html',
  styleUrl: './list-items.css',
})
export class ListItems {

  items: string[] =[]

  constructor(private todoService: Todo){
    this.items = this.todoService.getItems()
  }
  
}
