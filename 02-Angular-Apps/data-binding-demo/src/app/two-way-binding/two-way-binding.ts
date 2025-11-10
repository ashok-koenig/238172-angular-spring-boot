import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  imports: [FormsModule],
  templateUrl: './two-way-binding.html',
  styleUrl: './two-way-binding.css',
})
export class TwoWayBinding {
  firstName: string =''
  lastName: string =''
  fullName: string =''

  onSubmit():void {
    this.fullName = this.firstName + ' ' + this.lastName
  }
}
