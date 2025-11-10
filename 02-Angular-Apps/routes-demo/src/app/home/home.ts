import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  amount: string = ''
  constructor(private router: Router) {}
  handleClick(){
    if(this.amount){
      this.router.navigate(['/payment'])
    }
  }
  
}
