import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
})
export class UserDetail {
  name: string =''
  constructor(private route: ActivatedRoute){
    this.name = route.snapshot.params['name']
  }
}
