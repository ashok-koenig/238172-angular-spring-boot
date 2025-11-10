import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css',
})
export class EventBinding {
  picUrl: string = "pic1.jpg"

  changeImage(): void {
    this.picUrl = (this.picUrl == "pic1.jpg") ? "pic2.jpg" : "pic1.jpg";
  }

  showAlert(): void {
    alert('Button Clicked!')
  }
}
