import { Component } from '@angular/core';
import { Todo } from '../services/todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  imports: [FormsModule],
  templateUrl: './add-item.html',
  styleUrl: './add-item.css',
})
export class AddItem {
  item: string = ''

  constructor(private todoService: Todo){}

  handleAddItem() {
    if(this.item){
      this.todoService.addItem(this.item)
      this.item = ''
    }
  }

}
